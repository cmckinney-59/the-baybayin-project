import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <main className="App-content">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default RootLayout;
