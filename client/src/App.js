import "./App.css";
// import { useState, useEffect } from 'react';
// import Axios from "axios";
import { createContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Home/Landing";
import Profile from "./pages/Profile";
import Nav from "./pages/Common/Nav";
import PublishBook from "./pages/PublishBook/PublishBook";
import BecomeAWriter from "./pages/BecomeAWriter/BecomeAWriter";
import CatBook from "./pages/Home/CatBook";
import BookDetails from "./pages/Home/BookDetails/BookDetails"


export const Context = createContext();

function App() {
  return (
    <Context.Provider value={{}}>
      <GoogleOAuthProvider clientId="959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com">
        <div id="App">
          <Router>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/PublishBook" element={<PublishBook />} />
              <Route exact path="/BecomeAWriter" element={<BecomeAWriter />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/category" element={<CatBook/>}/>
              <Route exact path="/bookdetails" element={<BookDetails/>}/>
            </Routes>
          </Router>
        </div>
      </GoogleOAuthProvider>
    </Context.Provider>
  );
}

export default App;
