import { createContext, useState, useEffect } from "react";

console.log("AuthProvider mounted");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken") || null);
    const [authenticated, setAuthenticated] = useState(!!token);
    const [userInfo, setUserInfo] = useState(() => {
        const storedUser = localStorage.getItem("userInfo");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Redirect to backend for Keycloak login
    const login = () => {
        window.location.href = `https://sso.digital-id.my/realms/diddev/protocol/openid-connect/auth?` +
            new URLSearchParams({
                client_id: "sso-react-confidential", // Ensure this matches Keycloak
                response_type: "code",
                scope: "openid",
                redirect_uri: "http://localhost:3000/home" // Must match Keycloak config
            }).toString();
    };

    // Logout: Clear token and user info
    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo"); // Remove stored user data
        sessionStorage.clear();
        setToken(null);
        setAuthenticated(false);
        setUserInfo(null);
        window.location.href = 'http://localhost:5000/api/auth/logout';
    };

    // Fetch token and user info from backend after login
    const handleAuthCallback = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (!code) return; // No code = no action

        try {
            const response = await fetch(`http://localhost:5000/api/auth/callback?code=${code}`, {
                credentials: "include",
            });

            if (!response.ok) throw new Error("Authentication failed");

            const data = await response.json();
            console.log("Auth Callback Data:", data); // Debugging

            // Store token and user info
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("userInfo", JSON.stringify({ nama: data.nama, nric: data.nric }));

            setToken(data.token);
            setAuthenticated(true);
            setUserInfo({ nama: data.nama, nric: data.nric });

            // Redirect to home page
            window.location.href = "/home";
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    };

    // Run handleAuthCallback **only when there is an auth code**
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("code")) {
            handleAuthCallback();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, authenticated, login, logout, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};




//import React, { createContext, useContext, useState, useEffect, useRef } from "react";
//import Keycloak from "keycloak-js";

//const AuthContext = createContext(null);

//export const AuthProvider = ({ children }) => {
//    const keycloakRef = useRef(null);
//    const [authenticated, setAuthenticated] = useState(false);
//    const [userInfo, setUserInfo] = useState(null);
//    const [loading, setLoading] = useState(true);

//    // Ensure Keycloak is initialized only once
//    if (!keycloakRef.current) {
//        keycloakRef.current = new Keycloak({
//            realm: "diddev",
//            url: "https://sso.digital-id.my/",
//            clientId: "sso-react-confidential",
//        });
//    }


//    useEffect(() => {
//        const initializeKeycloakAndCheckAuth = async () => {
//            try {
//                if (!keycloakRef.current.authenticated) {  // ✅ Prevent multiple init calls
//                    console.log("🔄 Initializing Keycloak...");
//                    await keycloakRef.current.init({ onLoad: "check-sso" });
//                }

//                console.log("✅ Keycloak initialized. Checking backend auth status...");
//                const response = await fetch("http://localhost:5000/api/auth/status", { credentials: "include" });
//                const data = await response.json();
//                console.log("Auth status received:", data);

//                if (data.authenticated && data.user) {
//                    setAuthenticated(true);
//                    setUserInfo(data.user);
//                    console.log("✅ User authenticated, setting userInfo:", data.user);
//                } else {
//                    setAuthenticated(false);
//                    setUserInfo(null);
//                    console.warn("❌ User is NOT authenticated");
//                }
//            } catch (err) {
//                console.error("⚠️ Error during authentication:", err);
//            } finally {
//                setLoading(false);
//            }
//        };

//        initializeKeycloakAndCheckAuth();
//    }, []);






//    if (loading) return <div>Loading...</div>;

//    return (
//        <AuthContext.Provider value={{ keycloak: keycloakRef.current, authenticated, userInfo }}>
//            {children}
//        </AuthContext.Provider>
//    );
//};

//export const useAuth = () => useContext(AuthContext);

//const fetchUserInfo = async (token) => {
//    try {
//        const response = await fetch("http://localhost:5000/api/protected", {
//            headers: { Authorization: `Bearer ${token}` },
//        });

//        const userData = await response.json();
//        setUserInfo(userData);
//    } catch (error) {
//        console.error("Error fetching user info:", error);
//    }
//};
