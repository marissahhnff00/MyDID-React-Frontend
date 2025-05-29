import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { AuthContext } from "../components/AuthProvider"; // Import AuthContext
import "../css/App.css";

const Home = () => {
    const {logout } = useContext(AuthContext); // Get values from AuthContext
    const { userInfo } = useContext(AuthContext);


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>HOME PAGE</h1>
            {userInfo ? (
                <>
                    <div className="user-container">
                        <h2>{userInfo?.nama}</h2>
                        <h2>{userInfo?.nric}</h2>
                    </div>

                    <Button
                        label="Logout"
                        icon="pi pi-sign-out"
                        className="p-button-danger p-button-lg custom-btn"
                        onClick={logout}
                    />
                </>
            ) : (
                <p>You are not logged in. <Link to="/login">Login here</Link></p>
            )}
        </div>
    );
};

export default Home;




//import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
//import { useAuth } from "./AuthProvider";
//import { Button } from "primereact/button";
//import "./App.css";

//const Home = () => {
//    const { keycloak, authenticated, userInfo } = useAuth();

//    useEffect(() => {
//        console.log("User Info in Home:", userInfo);
//        console.log("Authenticated:", authenticated);
//        console.log("Keycloak Instance:", keycloak);
//    }, [userInfo, authenticated, keycloak]);

//    const logout = () => {
//        if (!keycloak) {
//            console.error("Keycloak is not initialized.");
//            return;
//        }

//        if (!authenticated) {
//            console.error("User is not authenticated.");
//            return;
//        }

//        keycloak.logout({ redirectUri: window.location.origin + "/login" })
//            .then(() => console.log("Logged out successfully"))
//            .catch((err) => console.error("Logout failed", err));
//    };

//    return (
//        <div style={{ textAlign: "center", marginTop: "50px" }}>
//            <h1>HOME PAGE</h1>
//            {authenticated ? (
//                <>
//                    <div className="user-container">
//                        <h2>{userInfo?.name || "No Name Found"}</h2>
//                        <h2>{userInfo?.nric || "No NRIC Found"}</h2>
//                    </div>

//                    <Button
//                        label="Logout"
//                        icon="pi pi-sign-out"
//                        className="p-button-danger p-button-lg custom-btn"
//                        onClick={logout}
//                    />
//                </>
//            ) : (
//                <p>You are not logged in. <Link to="/login">Login here</Link></p>
//            )}
//        </div>
//    );
//};

//export default Home;
