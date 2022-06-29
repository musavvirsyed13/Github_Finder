import React from "react";
import { NavLink } from "react-router-dom";

const ReposNav = () => {
  return (
    <div className="reposNav">
      <NavLink className="active" to="/overview">
        Overview
      </NavLink>
      <NavLink className="active" to="/repos">
        Repos
      </NavLink>
      <NavLink className="active" to="/followers">
        Followers
      </NavLink>
    </div>
  );
};

export default ReposNav;
