import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({imgURL,movieTitle,movieRating,movieID}) => {
    return (
        <Link to={`/${movieID}`} className="flex flex-col justify-between bg-secondary rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${imgURL}`} alt="" />
            </div>
            <div className="p-2 text-primary overflow-ellipsis">
                <h1 className="text-center font-pixelated text-2xl">{movieTitle}</h1>
            </div>
            <div className="p-2">
                <p className="bg-fifth rounded-2xl text-center font-space text-primary p-1">Rating: {movieRating}</p>
            </div>
        </Link>
    )
}

export default MovieCard
