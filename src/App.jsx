import React from "react";
import "./App.css";
import NewsApi from "./Components/NewsApi";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<NewsApi />} />
      </Routes>
    </Router>
  );
}

export default App;
