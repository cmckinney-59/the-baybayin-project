import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Open by default on desktop widths
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDesktop = window.innerWidth >= 900;
      setIsSidebarOpen(isDesktop);
    }
  }, []);

  return (
    <>
      <div className="App">
        <Header onToggleSidebar={toggleSidebar} />
        <Navigation isOpen={isSidebarOpen} onNavigate={closeSidebar} />
        <main className={`App-content ${isSidebarOpen ? "with-sidebar" : ""}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
