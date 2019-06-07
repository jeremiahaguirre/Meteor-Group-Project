import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../router";

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
