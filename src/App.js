import React from "react";
import "./App.css";
import Header from './components/header/Header';
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Header />

      <main className="mian">
        <Home />
      </main>
    </>
  )
}

export default App