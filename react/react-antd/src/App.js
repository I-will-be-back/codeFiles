import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Layout from './page/Layout'
import 'antd/dist/antd.css'

function Tabel () {
  return (
    <div>Tabel</div>
  )
}

function Label () {
  return (
    <div>Label</div>
  )
}

function App() {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={Layout}></Route>
        <Route path="/table" component={Tabel}></Route>
        <Route path="/label" component={Label}></Route>
      </Route>
    </Router>
  );
}

export default App;
