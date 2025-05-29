import React from "react";
import "../css/App.css";

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>© {new Date().getFullYear()} MyDigital ID. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
