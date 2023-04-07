import "./App.css";
// import { useState} from 'react';
// import Axios from "axios";
import { createContext, useState } from "react";
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
      
        <div id="App">
          
        
          <Router>
            <Nav/>
            
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
      
    </Context.Provider>
  );
}

export default App;
