import { useEffect, useState } from "react";
import Loader from "./Components/Main/Loader";
import Navbar from "./Components/Nav/Navbar";
import Search from "./Components/Nav/Search";
import NumResults from "./Components/Nav/NumResults";
import Main from "./Components/Main/Main";
import Box from "./Components/Main/Box";
import MovieList from "./Components/Main/MovieList";
import WatchedSummary from "./Components/Main/WatchedSummary";
import WatchedMovieList from "./Components/Main/WatchedMovieList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("spiderman");

  useEffect(
    function () {
      async function fetchMovies() {
        setIsLoading(true);

        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=41ed519c&s=${query}`
          );
          const data = await res.json();
          setMovies(data.Search || []);
        } catch (error) {
          console.error("Failed to fetch movies:", error);
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      }

      if (!query.trim()) {
        setMovies([]);
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
