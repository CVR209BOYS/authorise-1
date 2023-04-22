import "./App.css";
import { useEffect, useContext, useState } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Home/Landing";
import Profile from "./pages/Profile";
import Nav from "./pages/Common/Nav";
import PublishBook from "./pages/PublishBook/PublishBook";
import BecomeAWriter from "./pages/BecomeAWriter/BecomeAWriter";
import BookDetails from "./pages/Home/BookDetails/BookDetails";
import { MenuContext } from "./MenuContext";
import Market from "./pages/Market/Market";
import RegisterYourPublication from "./pages/PublishBook/RegisterYourPublication";
import UpdateProfile from "./pages/UpdateProfile";
import AuthorDetails from "./pages/Home/BookDetails/AuthorDetails";

function App() {
  const [opendetails, setopendetials] = useState(false);
  const [authordata, setauthordata] = useState({});

  const { allBooks } = useContext(MenuContext);
  useEffect(() => {
    console.log(allBooks.length);
  }, [allBooks]);

  if (allBooks[0]?.message === "to be loaded!") {
    return <div>loading</div>;
  } else {
    return (
      <GoogleOAuthProvider clientId="959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com">
        <div id="App">
          
          <Router>
            {opendetails && (
              <AuthorDetails
                open={{
                  setopendetails: setopendetials,
                  setauthordata: setauthordata,
                  authordata: authordata,
                }}
              />
            )}
            <Nav />
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/PublishBook" element={<PublishBook />} />
              <Route
                exact
                path="/RegisterYourPublication"
                element={<RegisterYourPublication />}
              />
              <Route exact path="/BecomeAWriter" element={<BecomeAWriter />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/market" element={<Market />} />
              <Route
                exact
                path="/bookdetails"
                element={
                  <BookDetails
                    open={{
                      setopendetails: setopendetials,
                      setauthordata: setauthordata,
                      authordata: authordata,
                      opendetails: opendetails,
                    }}
                  />
                }
              />
              <Route exact path="/updateprofile" element={<UpdateProfile />} />
            </Routes>
          </Router>
        </div>
      </GoogleOAuthProvider>
    );
  }
}

export default App;
