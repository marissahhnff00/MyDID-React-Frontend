import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import keycloak from "./keycloak";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   keycloak
  //     .init({ onLoad: "check-sso" }) // Check session without forcing login
  //     .then((auth) => setAuthenticated(auth))
  //     .catch(() => setAuthenticated(false));
  // }, []);
  console.log('authenticated', keycloak)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home authenticated={authenticated} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
