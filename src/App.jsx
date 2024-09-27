import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";
import ScoreSummaryPage from "./pages/ScoreSummaryPage";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<QuizListPage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/summary" element={<ScoreSummaryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
