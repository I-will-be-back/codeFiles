import React from 'react';
import {BrowserRouter as Router,Route, Link, Redirect} from 'react-router-dom'
import './App.css';

function Index () {
  return (
    <div>Home</div>
  )
}

function About () {
  return (
    <div>about</div>
  )
}

function User () {
  return (
    <div>user</div>
  )
}

function Protect () {
  return (
    <div>Protect</div>
  )
}

function Login () {
  return (
    <div>Login</div>
  )
}

// 进入页面之前 鉴权
// <PrivateRoute path="/user" component={} />
function PrivateRoute (props) {
  const {path,component: Component} = props
  return (
    <Route path={path} render={() => {
      return true ? <Component /> : <Redirect to={{
        pathname: '/login'
      }}></Redirect>
    }}>
    </Route>
  )
}

function Post () {
  return (
    <div>Post</div>
  )
}

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
        <li>
          <Link to="/protect">protect</Link>
        </li>
      </ul>
      {
        true ? <Route path="/" exact component={Index}></Route> : <div>no router</div>
      }
      <Route path="/about" component={About}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/login" component={Login}></Route>
      <PrivateRoute path="/post" component={Post}></PrivateRoute>
      <Route path="/protect" render={() => {
        return true ? <Protect /> : <Redirect to={{
          pathname: '/login',
          state: {from: '/protect'} 
        }} />
      }}></Route>
    </Router>
  )
}

export default App;
