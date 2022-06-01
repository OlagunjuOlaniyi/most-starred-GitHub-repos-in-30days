import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Repo from "./Components/Repo/Repo";

const url =
  "https://api.github.com/search/repositories?q=created:>2022-05-01&sort=stars&order=desc";

function App() {
  const [repo, setRepo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // const getUser = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();

  //   setRepo(users.items);
  // };

  //Check Pages
  const checkNumber = (check) => {
    if (check > page.length - 1) {
      return 0;
    }
    if (check < 0) {
      return page.length - 1;
    }
    return check;
  };

  // functions to get the next page
  const prevPage = () => {
    setPage((page) => {
      let prev = page - 1;
      return checkNumber(prev);
    });
  };

  // functions to get the prev page
  const nextPage = () => {
    setPage((page) => {
      let next = page + 1;
      return checkNumber(next);
    });
  };

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.github.com/search/repositories?q=created:>2022-05-01&sort=stars&order=desc&page=${page}`
        )
        .then((el) => {
          const data = el.data.items;
          setRepo(data);
        });
    } catch (error) {
      error.setRepo();
    }

    // getUser();

    setIsLoading(false);
  }, [page]);

  console.log(repo);

  if (isLoading) {
    return (
      <section className="section">
        <div className="isLoading">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
  
      {repo.map((repos) => {
        return <Repo key={repos.id} repos={repos} />;
      })}
    </div>
  );
}

export default App;
