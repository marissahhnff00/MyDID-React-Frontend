import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Home = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
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
