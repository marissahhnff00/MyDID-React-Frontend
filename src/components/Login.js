import React, { useContext } from "react";
import { Button } from "primereact/button";
import { AuthContext } from "../components/AuthProvider";
//import keycloak from "keycloak-js";

//const Login = () => {
//    //const { keycloak, authenticated, userInfo } = useAuth();

//    //console.log("Login page authenticated = ", authenticated);
//    //console.log("Login page user = ", userInfo);

//    const login = () => {
//        window.location.href = "http://localhost:5000/api/auth/login"; // Redirect to backend for login
//    };


//const logout = () => keycloak?.logout(); // Helps to prevent calling logout on `null`

const Login = () => {
    const { login } = useContext(AuthContext);
    return (
        <div style={{ textAlign: "center", marginTop: "50px"}}>
           {/*<<h2{userInfo?.name}</h2>*/ }
           {/* <h2>{userInfo?.nric}</h2>*/ }
        <Button
            onClick={login}
            label="Login"
            icon="pi pi-sign-in"
            className="p-button-success p-button-lg custom-btn"
            />
        </div>
    );
};


export default Login;
