import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter } from 'react-router-dom'
import Layout from '../../layout'
// import PropTypes from 'prop-types';
// import { withTracker } from 'meteor/react-meteor-data';



const App = () => (
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
);

export default App;