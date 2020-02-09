import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter basename="/clone-lookpin">
      <Route path="/" component={ProductPage} />
    </BrowserRouter>
  );
}

export default App;
