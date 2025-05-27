import type { JSX } from "react";
import "./App.css";

import Header from "./components/Header/Header.tsx";
import ContentContainer from "./components/ContentContainer/ContentContainer.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <ContentContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
