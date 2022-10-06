import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, About, Error, Details } from "./pages";

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="container content main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
