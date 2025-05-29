import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const LoginButton = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      {!keycloak.authenticated ? (
        <button onClick={() => keycloak.login()}>Login</button>
      ) : (
        <div>
          <p>Welcome, {keycloak.tokenParsed?.preferred_username}!</p>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
