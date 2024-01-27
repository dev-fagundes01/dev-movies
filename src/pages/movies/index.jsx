import { useEffect } from "react";
import { useState } from "react";
import {
  getMovieUpcoming,
  getTopMovies,
  getMovieLatest,
} from "../../services/getData";
import Slider from "../../components/Slider";

function Movies() {
  const [topMovies, setTopMovies] = useState();
  const [moviesLatest, setMoviesLatest] = useState();
  const [moviesUpcoming, setMoviesUpcoming] = useState();
  console.log(moviesLatest);

  useEffect(() => {
    async function getAllData() {
      Promise.all([getTopMovies(), getMovieLatest(), getMovieUpcoming()]).then(
        ([topMovies, moviesLatest, moviesUpcoming]) => {
          setTopMovies(topMovies),
            setMoviesLatest(moviesLatest),
            setMoviesUpcoming(moviesUpcoming);
        }
      );
    }
    getAllData();
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {moviesLatest && <Slider info={moviesLatest} title={"Filmes Recentes"} />}
      {moviesUpcoming && (
        <Slider info={moviesUpcoming} title={"Proximos Filmes"} />
      )}
    </div>
  );
}

export default Movies;
