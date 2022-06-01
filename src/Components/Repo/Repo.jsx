import React from "react";
import "./Repo.css";
import avatar from "../assets/avatar.png"

const Repo = () => {
  return (
    <div className="repo">
      <div className="repo__container">
        <div className="repo__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="repo__info">
          <h2>Username</h2>
          <p>repositories descriptions bla bla blas....</p>
          <div className="repo__info-others">
            <button>Stars: 20</button>
            <button>Issues: 1000</button>
            <p>Submitted 30 days ago by username</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
