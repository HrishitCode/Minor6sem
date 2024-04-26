import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewNavbar from "./components/newNavbar"; // Corrected component name
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
//import IndexPage from "@pages";
import RegisterPage from "@pages/register";
import Organisation from "./components/Organisation";
import User from "./components/User";
import Home from "./components/newHome"
import IndexPage from "./pages/index"
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
        <Route path="/user/index" exact element={<IndexPage />}></Route>
      {/*  <Route path="/test" exact element={<IndexPage />} />  */}
        <Route path="/register" exact element={<RegisterPage />} />
        <Route
          path="/"
          exact
          element={
            <>
              <Home />
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
