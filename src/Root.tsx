import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Sync dark mode state with body class changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.body.classList.contains("dark-mode");
      setIsDarkMode(isDark);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also check on mount
    const isDark = document.body.classList.contains("dark-mode");
    setIsDarkMode(isDark);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="App">
        <Header
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          isDarkMode={isDarkMode}
        />
        <Navigation isOpen={isSidebarOpen} onNavigate={closeSidebar} />
        <main className={`App-content ${isSidebarOpen ? "with-sidebar" : ""}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
