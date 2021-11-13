import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';
const HomePage = () => {
    const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=281cc22c84760fa7d1b5184a6914c9d5";
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(baseURL)
        .then((response)=>{
            setMovies(response.data.results);
            setLoading(false);
        })
        .catch((e)=>alert(e));
    }, [loading])
    let name = movies.map(
        (mov)=>(
        <MovieCard
        imgURL={mov.poster_path}
        movieTitle={mov.title}
        movieRating={mov.vote_average}
        movieID={mov.id}
        />
        )
        );
    return (
        <div className="text-secondary h-full pt-5">
            {loading ? 
            (<Loader/>):
            (
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-20">
                {name}
            </div>
            

            )
            }
        </div>
    )
}

export default HomePage
