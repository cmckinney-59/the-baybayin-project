import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import NavigationDropdown from "./components/NavigationDropdown/NavigationDropdown";
// import Footer from "./components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <NavigationDropdown />
        <main className="App-content">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default RootLayout;
