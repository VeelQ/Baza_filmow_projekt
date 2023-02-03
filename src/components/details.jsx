import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
const axios = require('axios');

const Details = () => {

    let { id } = useParams();
    const [item, setItem] = useState([]);
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));

    const nav = useNavigate();
    const fetchFun = () => {
        if(!id){
            nav("/")
            return
        }
        axios({method:'get',url:`https://at.usermd.net/api/movies/${id}`})
        .then((result) => {
            setItem(result.data)
        },
        (error) => {
            nav("/")
            console.error(error)
        })
    }
    
    useEffect(()=>{
        fetchFun()
    },[])


    const handleDelete = (event) => {
        event.preventDefault()

        axios({
            method: 'delete',
            url: `https://at.usermd.net/api/movie/${id}`,

        }).then((response) => {
            window.location.assign("/")
        }).catch((error) => {
            console.log(error)
        })
    }


                return <div className="card mb-4 box-shadow bg-dark text-white" style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "400px", margin: "auto", padding: "20px"}}>
                    <img className="card-img-top" src={item.image} alt={item.title}></img>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">1h 58min</small>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text pt-2">{item.content}</p>
                        </div>
                        
                        <div className="pt-3">
                        {(!isNotLogged && user.isAdmin === true) && <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>}
                        </div>
                        
                    </div>
                </div>
                
          
};

export default Details;