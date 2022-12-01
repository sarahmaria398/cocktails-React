import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav"
import HomePage from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Routes >
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cocktails" element={<CocktailPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;