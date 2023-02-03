import React, { useState } from "react";

import axios from 'axios';

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    id: "",
    title: "",
    image: "",
    content: ""
  });

  //const [className, setClassName] = useState("card-img-top imgt")

  const[successMessage, setSuccessMessage] = useState('');
  const[errorMessage, setErrorMessage] = useState('');


  const handleChange = e => {
    setMovieData({...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://at.usermd.net/api/movies', movieData)
      .then(res => {
        setSuccessMessage("Movie succesfully added")
      })
      .catch(err => {
        setErrorMessage("An error has occured, please try again");
      });
    };


        return(
        //<>
            
    //         <section className="vh-100 bg-image" id= "backgroundView" >

    //   <div className="row d-flex justify-content-center align-items-center h-20" >
    //     <div className="col-12 col-md-9 col-lg-7 col-xl-6" >
    //     <div className="card mb-4 box-shadow bg-dark text-white" >
    //         <div className="card-body p-5" >
    //           <h2 className="text-uppercase text-center mb-5">Add movie</h2>

    <div className="containter d-flex justify-content-center">
        <div className="col-md-5 px-3 px-lg-5 py-5 bg-dark mb-5">

              <form onSubmit={handleSubmit}>
                <div className="text-center text-white">
                    <p>Add movie</p>
                  
                </div>

              <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg bg-dark text-light" name="title" value={movieData.title} onChange={handleChange} placeholder="Title" required/>
                </div>

                <div className="form-outline mb-4">
                    <textarea className="form-control form-control-lg bg-dark text-light" id="textAreaExample" rows="4" name="content" value={movieData.content} onChange={handleChange} placeholder="Description" required/>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg bg-dark text-light" name="image" value={movieData.image} onChange={handleChange} placeholder="Image link" required/>
                </div>
                {/* https://cdn.gracza.pl/galeria/mdb/f/85_en.jpg */}

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-outline-primary me-2">Add movie</button>
                </div>

                {/* <br/> */}
                <div>
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                           {successMessage}

                          </div>
                        )}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
          )}
          </div>

              </form>

            </div>
          </div>
//         </div>
//       </div>
// </section>

        //</>
    );
}

export default AddMovie;
