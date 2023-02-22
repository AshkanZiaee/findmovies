import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function MovieDetails() {
  const { state } = useLocation();
  const { movieProp } = state;
  const { backdrop_path, overview, vote_average, title } = movieProp;
  const { id } = useParams();
  const imagePath = `https://image.tmdb.org/t/p/original`;

  return (
    <div className="flex flex-col justify-center text-center items-center gap-2 bg-black text-white">
      <h1 className="mt-2">{title}</h1>
      <img
        src={imagePath + backdrop_path}
        className="object-contain w-[80%] "
      />
      <p className="center p-5 w-[100ch]">{overview}</p>
    </div>
  );
}
