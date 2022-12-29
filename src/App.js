import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav"
import HomePage from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import Footer from "./components/Footer";
import BrowsePage from "./pages/BrowsePage";
import IngredientPage from "./pages/IngredientPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Routes >
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cocktails/:id" element={<CocktailPage />} />
          <Route exact path="/cocktails/by_letter/:str" element={<BrowsePage />} />
          <Route exact path="/ingredients/:id" element={<IngredientPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;