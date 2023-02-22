import { useEffect, useRef, useState } from "react";
import Movie from "../components/Movie";

export default function PopularMovies() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [moviesArr, setMoviesArr] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`
      );
      const { results, page } = await response.json();
      setMoviesArr(results);
      console.log(pageNum);
    }
    getMovies();
  }, [pageNum]);
  return (
    <div className="bg-black text-center bg-black w-full h-full ">
      <div className="bg-primary text-white p-5">
        <h2 className="text-2xl font-montserrat">
          Most Popular Movies Across The World
        </h2>
      </div>
      <div className="grid grid-cols-fluid m-5 text-center gap-5">
        {moviesArr?.map((movieItem) => (
          <Movie key={movieItem.id} movieProp={movieItem} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button
          className={`bg-secondary text-4xl p-5 m-5 rounded-xl ${
            pageNum === 1 ? "text-slate-400" : ""
          }`}
          disabled={pageNum === 1 ? true : false}
          onClick={() => setPageNum(pageNum - 1)}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNum(pageNum + 1)}
          className="bg-secondary text-4xl p-5 m-5 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}
