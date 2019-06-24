import React from 'react';

const withLogin = (Com) => {
  const isLogin = true;
  class NewComponent extends React.Component {
    render() {
      if (!isLogin) {
        return (
          <button>需要登录</button>
        );
      }
      return (
        <Com />
      );
    }
  }
  NewComponent.displayName = `withLogin(${Com.displayName})`;
  return NewComponent;
}

export default withLogin;