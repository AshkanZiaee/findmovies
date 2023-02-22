import { Link } from "react-router-dom";

export default function Movie({ movieProp }) {
  const { title, poster_path, popularity, vote_average, release_date, id } =
    movieProp;
  const imagePath = `https://image.tmdb.org/t/p/original`;
  return (
    <div className=" text-center flex flex-col items-center my-3">
      <Link to={`/popular-movies/${id}`} state={{ movieProp }}>
        <h2 className="text-white text-lg my-2">{title}</h2>
        <img className="w-[200px] h-[300px]" src={imagePath + poster_path} />
        <h3 className="text-white text-lg my-1">{release_date}</h3>
      </Link>
    </div>
  );
}
