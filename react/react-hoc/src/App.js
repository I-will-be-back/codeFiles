import React from 'react';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
// import WithLogin from './WithLogin';
import ExampleMobx from './exampleMobx/index';
import ExampleDeBounce from './exampleDeBounce/index';
// import examplebase from './examplebase/index';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopStatus = WithLogin(ShopCart);
function App() {
  return (
    // React.Fragment
    <>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopStatus /> */}
      <ExampleMobx />
      <ExampleDeBounce />
    </>
  );
}

export default App;
