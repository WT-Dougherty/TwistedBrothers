import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
