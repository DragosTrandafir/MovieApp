//import "./App.css";
//import { useState, useEffect } from "react";

/*const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: DOe</h2>
      <h2>Age: 30</h2>
    </>
  );
};*/
/*
const App = () => {
  /* const name = "john";
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "caca"}!</h1>
    </div>
  );*/
/*const name = 'john';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello {2 + 2}!</h1>
      {name ? <>test</> : <>tes</>}
    </div>
  );*/
/*return (
    <>
      <Person name={"John"} />
      <div className="App">
        <h1>Hello !</h1>
      </div>
    </>
  );*/
/*
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //when we reload the page we set the counter to 100
    setCounter(100); //when the array is empty, the setter happends only at the initial load of the component
  }, [counter]);

  useEffect(() => {
    alert("you've changed the counter to " + counter); //weget this alert every time we change the counter
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
*/
import React from "react";
import MovieCard from "./MovieCard.jsx";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//2e7eea7b

const API_URL = "http://www.omdbapi.com?apikey=2e7eea7b";

/*const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};*/

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  /*useEffect(() => {
    searchMovies("Batman");
  }, []);*/

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();

    setMovies(data.Search); //the movies array
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
//N/A is how this api declare movies which have no image, we can see this in the console

export default App;
