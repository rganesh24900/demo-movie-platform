import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { actionCreators } from '../state';

const Navbar = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actionCreators.fetchPopularMovies());
  }, []);

  return (
    <nav
      className="fixed flex w-full items-center justify-end gap-4  px-9 py-3 lg:justify-between lg:gap-8 bg-gray-700"
      aria-label="Global"
    >
      <Link
        onClick={() => {
          dispatch(actionCreators.fetchPopularMovies());
        }}
        to="/"
      >
        <p className="text-xs font-medium">MovieDb</p>
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <NavLink
          className="text-sm text-gray-500"
          onClick={() => {
            dispatch(actionCreators.fetchPopularMovies());
          }}
          to="/"
        >
          Popular Movies
        </NavLink>
        <NavLink
          onClick={() => {
            dispatch(actionCreators.fetchUpcomingMovies());
          }}
          className="text-sm text-gray-500"
          to="/"
        >
          Upcoming Movies
        </NavLink>
        <NavLink
          onClick={() => {
            dispatch(actionCreators.fetchTopMovies());
          }}
          className="text-sm text-gray-500"
          to="/"
        >
          Top Rated Movies
        </NavLink>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            className="bg-white rounded p-2"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Movie Name"
          />
          <button
            onClick={() => {
              if(!searchText) return;
              dispatch(actionCreators.searchMovies(searchText));
              navigate('/');
            }}
            className="cursor-pointer bg-gray-200 text-gray-500 p-2 rounded whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
