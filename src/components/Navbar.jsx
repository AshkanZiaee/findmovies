import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-center bg-black">
      <ul className="flex justify-around py-4 text-2xl cursor-pointer m-0 py-0 px-0 text-white">
        <li className="border-r-5 border-white hover:bg-secondary w-full h-full py-2 bg-primary">
          <Link>About</Link>
        </li>
        <li className="border-r-5 border-white hover:bg-secondary w-full h-full py-2 bg-primary">
          <Link to="/popular-movies">Popular Movies</Link>
        </li>
        <li className="border-r-5 border-white hover:bg-secondary w-full h-full py-2 bg-primary">
          <Link>Popular Shows</Link>
        </li>
      </ul>
    </nav>
  );
}
