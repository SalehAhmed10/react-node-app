import React from "react";
import { Route, Routes } from "react-router";
import App from "./App";

const MyRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/api" element={<App />} />
      {/* <Rote path="/message-screen/:id" element={<MessageScreen />} /> */}
    </Routes>
  );
};

export default MyRoutes;
