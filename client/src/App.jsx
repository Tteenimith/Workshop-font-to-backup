//rafce
import React, { useEffect } from "react";
import AppRoute from "./routes/AppRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <AppRoute />
    </div>
  );
};

export default App;
