import { useState, useEffect } from "react";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext.tsx";

export default function ExperimentalFeaturesBanner() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    const saved = localStorage.getItem("experimentalFeaturesBannerDismissed");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Reset dismissed state when experimental features are turned off
    if (!showExperimentalFeatures) {
      setIsDismissed(false);
      localStorage.removeItem("experimentalFeaturesBannerDismissed");
    }
  }, [showExperimentalFeatures]);

  useEffect(() => {
    // Add/remove class to body to adjust layout
    const isVisible = showExperimentalFeatures && !isDismissed;
    if (isVisible) {
      document.body.classList.add("experimental-banner-visible");
    } else {
      document.body.classList.remove("experimental-banner-visible");
    }
    return () => {
      document.body.classList.remove("experimental-banner-visible");
    };
  }, [showExperimentalFeatures, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("experimentalFeaturesBannerDismissed", "true");
  };

  if (!showExperimentalFeatures || isDismissed) {
    return null;
  }

  return (
    <div className="experimental-features-banner">
      <div className="experimental-features-banner-content">
        <p className="experimental-features-banner-text">
          Experimental features are enabled. These features may be unstable or
          incomplete.
        </p>
        <button
          className="experimental-features-banner-close"
          onClick={handleDismiss}
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
