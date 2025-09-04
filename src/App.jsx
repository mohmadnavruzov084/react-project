import "./main.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import GetDataMovies from "./components/GetDataMovies";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <GetDataMovies>
          {(
            { movies, loading, error } 
          ) => <Card loading={loading} movies={movies} error={error} />}
        </GetDataMovies>
      </div>
    </>
  );
}

export default App;
