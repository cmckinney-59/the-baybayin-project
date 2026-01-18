import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ExperimentalFeaturesBanner from "./components/ExperimentalFeaturesBanner/ExperimentalFeaturesBanner";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <div className="App">
        <ExperimentalFeaturesBanner />
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Navigation isOpen={isSidebarOpen} onNavigate={closeSidebar} />
        <main className={`App-content ${isSidebarOpen ? "with-sidebar" : ""}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
