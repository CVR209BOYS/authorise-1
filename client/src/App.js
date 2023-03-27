
import './App.css';
// import { useState, useEffect } from 'react';
// import Axios from "axios";
import { createContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Nav from "./pages/Nav";
import Market from './pages/Market';
import Footer from './pages/Footer';



export const Context = createContext();


function App() {
  return (
    <Context.Provider value={{  }}>
      <GoogleOAuthProvider clientId="959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com" >
        <div className="App">

            <Nav />
          <Router>
            <Routes>
              <Route exact path="/" element={<Landing />} />
             

            </Routes>
          </Router>
              <Market/>
              <Footer/>

        </div>
      </GoogleOAuthProvider>
    </Context.Provider>
  );
}

export default App;
