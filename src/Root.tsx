import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ExperimentalFeaturesBanner from "./components/ExperimentalFeaturesBanner/ExperimentalFeaturesBanner";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    if (!isSidebarOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSidebar();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isSidebarOpen]);

  return (
    <>
      <div className="App">
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <ExperimentalFeaturesBanner />
        {isSidebarOpen && (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close navigation"
            onClick={closeSidebar}
          />
        )}
        <Navigation isOpen={isSidebarOpen} onNavigate={closeSidebar} />
        <main className="App-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
