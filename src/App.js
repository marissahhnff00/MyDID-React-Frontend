import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { AuthProvider } from "./AuthProvider";
import Login from "./components/Login";
import Home from "./components/Home";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/App.css";
import ProtectedPage from "./components/ProtectedPage";
import { AuthProvider } from "./components/AuthProvider";


function App() {
    return (
        <div className="container">
            <AuthProvider>
      <Router>
       <Header />
       <div className="app-content">
        <Routes>
     
        <Route path="/" element={<Home /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage /> } />
        </Routes>
      </div>
        <Footer />
                </Router>
            </AuthProvider>
  
    </div>
  );
}

export default App;
