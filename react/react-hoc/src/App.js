import React from 'react';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
// import WithLogin from './WithLogin';
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
    </>
  );
}

export default App;
