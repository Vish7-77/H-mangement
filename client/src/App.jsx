import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { loading } = useSelector((e) => e.loadingReducer);
  const { user } = useSelector((e) => e.userReducer);



  return (
    <BrowserRouter>
      <Toaster />

      {loading ? <Loader /> : null}
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/login"} />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/home" /> : <Signup />}
          />

          <Route path="*" element={<h2>NOt Fount</h2>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
