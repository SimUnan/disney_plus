import React from 'react'
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"; 

const HrMovieCard = ({movieBackDrop}) => {
    return (
        <section className='
            group
            hover:scale-110
            transition-all
            duration-150 
            ease-in 
            cursor-pointer
            mt-4
            mb-2
            md:mt-8
            md:mb-8
            '
        >
            <img 
                src={IMG_BASE_URL+movieBackDrop.backdrop_path}
                className='
                    w-[250px]
                    md:w-[400px]
                    object-cover
                    rounded-lg 
                    shadow-xl
                    shadow-gray-900 
                    group-hover:border-[3px] 
                    border-gray-200
                    transition-all
                    duration-150 
                    ease-in 
                    
                '
            />
            <p className='
                w-[250px]
                md:w-[400px] 
                pt-3 pl-3 
                uppercase 
                font-semibold 
                text-lg
                '
            >{movieBackDrop.title}</p>
        </section>
    )
}

export default HrMovieCard
