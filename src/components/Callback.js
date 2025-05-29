import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Callback = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
            axios.post("http://localhost:5000/login", { code })
                .then(response => {
                    localStorage.setItem("token", response.data.access_token);
                    setUserInfo(response.data);
                    navigate("/"); 
                })
                .catch(error => console.error("Login error:", error));
        }
    }, [navigate]);

    return (
        console.log(userInfo)
    );
};

export default Callback;
