import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
// import Footer from "./components/Footer/Footer";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Collapsed by default - shows icons only

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <div className="App">
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Navigation isOpen={isSidebarOpen} onNavigate={closeSidebar} />
        <main className={`App-content ${isSidebarOpen ? "with-sidebar" : ""}`}>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default RootLayout;
