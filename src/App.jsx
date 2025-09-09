import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import GetDataMovies from "./components/GetDataMovies";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Categories } from "./components/pages/categories";
import { About } from "./components/pages/about";
import "./main.scss";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <GetDataMovies>
        {({ movies, loading, error }) => (
          <Card loading={loading} movies={movies} error={error} />
        )}
      </GetDataMovies>
      <Routes>
        <Route path="/" element={<Home />} />\
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
