import Organisation from "./components/Organisation";
import User from "./components/User";
import Navbar from "./components/Navbar";
import { Route, Routes, Switch } from "react-router-dom"; // Import Switch
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import IndexPage from "@pages";
import RegisterPage from "@pages/register";
import './App.css'
import './index.css'
import MainNavbar from "@components/MainNavbar";
import Login from "@components/Login";
import Signup from "@components/Signup";

function App() {
  return (
    <>
      <Routes>
        <MainNavbar />
        <Switch> {/* Wrap Routes with Switch */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Other routes */}
        </Switch>
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
