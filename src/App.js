import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import DashBoard from "./Pages/DashBoard";
import Details from "./Pages/Details";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/homepage" element={<DashBoard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/details/:id" element={<Details />}/>
        {/* <Route path="/details/:type" element={<Details />}/> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
