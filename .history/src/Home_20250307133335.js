import React from "react";
import { Link } from "react-router-dom";

const Home = ({ authenticated }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Home Page</h2>
      {authenticated ? (
        <p>{authenticated}</p>
      ) : (
        <p>You are not logged in. <Link to="/login">Login here</Link></p>
      )}
    </div>
  );
};

export default Home;
