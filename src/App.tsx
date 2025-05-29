import type { JSX } from "react";
import "./App.css";

import Header from "./components/Header/Header.tsx";
import ContentContainer from "./components/ContentContainer/ContentContainer.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <main className="App-content">
        <ContentContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
