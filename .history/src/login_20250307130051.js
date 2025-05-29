import React from 'react';

const Login = () => {

  return (
    <div>
      <h1>Welcome to Keycloak Auth</h1>
      {!keycloak.authenticated ? (
        <button onClick={() => keycloak.login()}>Login</button>
      ) : (
        <button onClick={() => keycloak.logout()}>Logout</button>
      )}
    </div>
  );
};

export default Login;
