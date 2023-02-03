import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return <div className="flexCenter"><div className="jumbotron text-light">
       <h1 className="display-4">404 - Not found!</h1>
       <p className="lead">That's probably not what you are looking for.<br />Exept you were looking for this page.</p>
       
       <Link className="btn btn-primary btn-lg flexCenter mb-5" to="/" role="button">Home</Link>
   </div></div>;
};

export default NotFound;