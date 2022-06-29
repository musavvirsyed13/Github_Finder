import React from "react";
import { useContext, useEffect } from "react";
import { GithubContext } from "../context/GithubContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { search, setSearch, getSearch } = useContext(GithubContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/overview");
  }, []);

  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        autoFocus
        placeholder="Search for a User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Form;
