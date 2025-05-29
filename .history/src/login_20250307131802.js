import React from "react";
import keycloak from "./keycloak";

const Login = () => {
  const login = () => keycloak.login();
  const logout = () => keycloak.logout();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>
      <button onClick={login} style={{ margin: "10px" }}>Login</button>
      <button onClick={logout} style={{ margin: "10px" }}>Logout</button>
    </div>
  );
};

export default Login;
