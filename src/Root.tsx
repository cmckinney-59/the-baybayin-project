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
  const toggleDarkMode = () => setIsDarkMode((prev: boolean) => !prev);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <div className="App">
        <Header
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          onToggleDarkMode={toggleDarkMode}
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
