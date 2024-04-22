import React, { useState } from "react";
import { Route, Routes, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewNavbar from "./components/newNavbar"; // Corrected component name
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import IndexPage from "@pages";
import RegisterPage from "@pages/register";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Organisation from "./components/Organisation";
import User from "./components/User";

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (page) => {
    console.log('Page changed:', page);
    setCurrentPage(page);
  };

  return (
    <>
      <Routes>
        <Route
          path="/user"
          exact
          element={
            <>
              <Navbar onPageChange={handlePageChange} />
              <Carousel />
              <User />
              <Footer />
            </>
          }
        />
        <Route path="/test" exact element={<IndexPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route
          path="/login"
          exact
          element={<Login />}
        />
        <Route
          path="/signup"
          exact
          element={<Signup />}
        />
        <Route
          path="/"
          exact
          element={
            <>
              <NewNavbar /> {/* Render the NewNavbar component */}
              <Carousel />
              <Organisation />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
