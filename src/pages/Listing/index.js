
import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios"

function Listing(){
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/movies`
            );
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } 
        };
        getData();
      }, []);
      console.log(data);
    return(
        <>
      {/*   {error && <p>{error}</p>} */}
        <Pagination/>
        <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
            </div>
        </div>
        </div>

        
        </>  
    )
}

export default Listing;