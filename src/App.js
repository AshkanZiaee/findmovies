import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
        <Route path="/popular-movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
