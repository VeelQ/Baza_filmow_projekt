import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">MovieGalaxy</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse pt-4 pt-lg-0" id="navbarSupportedContent">
          <form className="d-flex flex-grow-2" role="search">
            <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary me-2" type="submit">Search</button>
          </form>
        </div>


        <div className="d-flex " style={{ flexDirection: 'row'}}>
  {localStorage.getItem("token") ? (
    <button type="button" className="btn btn-danger mb-4" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <Link to="/login">
      <button type="button" className="btn btn-primary mb-4 mr-2">Log In</button>
    </Link>
  )}

  <Link to="/signup">
    <button type="button" className="btn btn-outline-primary">Sign Up</button>
  </Link>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
