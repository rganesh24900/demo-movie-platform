import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header
      className="border-b-1 relative z-20 flex h-full w-full flex-col-reverse items-center justify-between border bg-white"
    >
      <nav
        className="flex w-full items-center justify-end gap-3  px-5 py-3 lg:justify-between lg:gap-8 "
        aria-label="Global"
      >
        <Link to="/"><p className="text-xs font-medium">MovieDb</p></Link>
        <div className="flex flex-row gap-2">
          <NavLink to="/">Popular Movies</NavLink>
          <NavLink to="/">
            Upcoming Movies
            </NavLink>
            <NavLink to="/">
            Top Rated Movies
            </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
