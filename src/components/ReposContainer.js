import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import Repos from "./Repos";
import Followers from "./Followers";

const ReposContainer = () => {
  return (
    <div className="reposContainer">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </div>
  );
};

export default ReposContainer;
