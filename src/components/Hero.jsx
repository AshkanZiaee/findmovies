import heroImage from "./hero.jpg";
import Link from "react-dom";
import { Route, BrowseROuter as Router } from "react-router-dom";

export default function hero() {
  return (
    <div className="relative text-center">
      <img src={heroImage} className="bg-contain z-0" />
    </div>
  );
}
