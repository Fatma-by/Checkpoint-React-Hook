// App.js
import Filter from "./component/Filter";
import AddMovie from "./component/AddNewMovie";
import Body from "./Body";
import useMoviesStroe from "./moviesStore";

function App() {
  const [movies, setMovies] = useMoviesStroe((state) => [
    state.movies,
    state.setMovies,
  ]);

  return (
    <div className="app">
      

      <Body movies={movies} />
    </div>
  );
}

export default App;
