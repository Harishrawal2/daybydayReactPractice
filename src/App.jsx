import React from "react";
import "./App.css";
// import NewsApi from "./Components/NewApi/NewsApi";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Tab from "./Components/Tab/Tab";
import LoanCalculate from "./Components/LoanCalculator/LoanCalculate";
import Todolist from "./Components/Todo/Todolist";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index path="/" element={<NewsApi />} /> */}
        {/* <Route index path="/" element={<Tab />} /> */}
        {/* <Route index path="/" element={<LoanCalculate />} /> */}
        <Route index path="/" element={<Todolist />} />
      </Routes>
    </Router>
  );
}

export default App;
