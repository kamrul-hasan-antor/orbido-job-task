import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Payment from "./components/Payment";
import Partners from "./components/Partners";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <>
      <Header />
      <div className="relative bg-red-0 overflow-x-hidden overflow-y-hidden">
        <About />
        <Payment />
      </div>
      <Partners />
      <Subscribe />
    </>
  );
};

export default App;
