import React from "react";
import "./Repo.css";
import avatar from "../assets/avatar.png";

const Repo = ({ repos }) => {
  const { owner, description, stargazers_count, open_issues_count } = repos;
  return (
    <div className="repo">
      <div className="repo__container">
        <div className="repo__avatar">
          <img src={owner.avatar_url} alt={owner.login} />
        </div>
        <div className="repo__info">
          <h2>{owner.login}</h2>
          <p>{description}</p>
          <div className="repo__info-others">
            <button>Stars: {stargazers_count}</button>
            <button>Issues: {open_issues_count}</button>
            <p>Submitted 30 days ago by {owner.login}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
