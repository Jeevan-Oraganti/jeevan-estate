import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Jeevan</span> Estate
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-gray-100 rounded-lg shadow-sm"
        >
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent px-4 py-2 focus:outline-none w-32 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 rounded-r-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaSearch />
          </button>
        </form>
        <ul className="flex items-center gap-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
            <li className="hidden sm:inline">Home</li>
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            <li className="hidden sm:inline">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-gray-800 hover:text-blue-600 transition">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
