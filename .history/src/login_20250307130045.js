import React from 'react';

const Login = () => {

  if (!initialized) {
    return <div>Loading...</div>;
  }
  if (!keycloak.authenticated) {
    return <div>Not authenticated</div>;
}
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

export default Home;
