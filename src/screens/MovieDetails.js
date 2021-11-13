import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
const MovieDetails = () => {
    const baseURL = "https://api.themoviedb.org/3/movie"
    const search = useLocation().pathname;
    const [movieDetails, setMovieDetails] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${baseURL}${search}?api_key=281cc22c84760fa7d1b5184a6914c9d5`)
        .then((response)=>{
            setMovieDetails(response.data);
            setLoading(false);
        })
        .catch((e)=>alert(e))
    }, [search,loading])
    let genres = movieDetails.genres?.map((gen)=>(
    <div className="bg-tertiary rounded-2xl font-pixelated text-center text-2xl">{gen.name}</div>
    ))
    return (
        <div className="h-full space-y-5">
        {loading ? 
            (<Loader/>):
            (
            <div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                <img className="md:h-1/3 md:w-1/2 rounded-2xl" src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt="" />
                <div className="text-secondary space-y-5 p-5">
                    <h1 className="text-center font-space text-3xl">{movieDetails.original_title}</h1>
                    <p className="font-pixelated text-2xl">{movieDetails.overview}</p>
                    <p className="font-pixelated text-2xl">Release Date: {movieDetails.release_date}</p>
                    <p className="font-pixelated text-2xl">Runtime (mins): {movieDetails.runtime}</p>
                </div>  
            </div>
            <div className="space-y-5">
                <div>
                    <h1 className="font-space text-3xl text-secondary">Genres</h1>
                </div>
            
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 xl:grid-cols-5 gap-5">
                    {
                       genres
                    }
                </div>
                <div className="space-y-5">
                    <h1 className="font-space text-3xl text-secondary">Pick Show Timing</h1>
                    <div className="flex bg-tertiary justify-evenly font-pixelated text-2xl">
                        <Link to="booking" className="flex-1 text-center hover:bg-secondary p-3">Morning</Link>
                        <Link to="booking" className="flex-1 text-center hover:bg-secondary p-3">Afternoon</Link>
                        <Link to="booking" className="flex-1 text-center hover:bg-secondary p-3">Night</Link>
                    </div>
                </div>
            </div>
            </div>
        )  
        }
        </div>
    )
}

export default MovieDetails
