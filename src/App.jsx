import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

// import "/src/assets/scss/_variables.scss";

function App() {
  return (
    <Router basename="/ph">
      <main className="App">
        <NavBar />
        <SideBar />
        <Home />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
