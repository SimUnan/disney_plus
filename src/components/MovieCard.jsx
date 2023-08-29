import React from 'react'
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"; 

const MovieCard = ({moviePoster}) => {
    return (
        <>
            <img 
                src={IMG_BASE_URL+moviePoster.poster_path}
                className='
                    w-[120px]
                    md:w-[250px]
                    object-cover
                    rounded-lg 
                    shadow-xl
                    shadow-gray-900 
                    hover:scale-110
                    hover:border-[4px] 
                    border-gray-200
                    transition-all
                    duration-150 
                    ease-in 
                    cursor-pointer
                    mt-4
                    mb-4
                    md:mt-8
                    md:mb-8
                '
            />
        </>
    )
}

export default MovieCard
