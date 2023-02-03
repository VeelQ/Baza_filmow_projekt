import React from "react";
import {Link} from "react-router-dom";
import { isExpired } from "react-jwt";

const MoviesAlbum = ( props ) => {

    const { items } = props;
    const isNotLogged = isExpired(localStorage.getItem('token'));


    if(items.length<1){
        return (<div className="album pb-5 bg-dark">
                    <div className="d-flex py-4 justify-content-center">

                        {isNotLogged && <Link to="/signUp"><button className="btn btn-primary">Add Movie</button></Link>}
                        
                        {!isNotLogged && <Link to="/add"><button className="btn btn-primary">Add Movie</button></Link>}
                    </div>
                    <p className="text-light text-center">No movies found</p>
                </div>
        )
    }
    return (
        
        <div class="album py-5 bg-dark">
             
    
            <div class="container">
                <div class="row">
                {items.map((item, key) =>
            (
                    <div class="col-md-2" key={key}>
                        <div className="card card-hoop mb-4 box-shadow bg-dark text-white">
                        <Link to={`/details/${item.id}`}><img className="card-img-top th card-img-top-brightness" src={item.image} alt={item.text}></img></Link>

                        <div className="card-body">
                            <Link to={`/details/${item.id}`}><p className="card-text">{item.title}</p></Link>
                        <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">1h 58 min</small>
                        </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="d-flex py-4 justify-content-center">
                {isNotLogged && <Link to="/signUp"><button className="btn btn-primary">Add Movie</button></Link>}
                {!isNotLogged && <Link to="/add"><button className="btn btn-primary">Add Movie</button></Link>}
            </div>
        </div>
   )
};
export default MoviesAlbum;