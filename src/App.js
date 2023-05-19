import "./App.css";
import React from "react";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Router>
        <SignIn/>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;
