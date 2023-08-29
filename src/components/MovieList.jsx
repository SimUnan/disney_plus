import {React, useEffect, useState, useRef } from 'react'
import GolbalApi from '../services/GolbalApi'
import MovieCard from './MovieCard'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi2'
import HrMovieCard from './HrMovieCard';
const screenWidth = window.innerWidth; 

const MovieList = ({movieId, index_}) => {
        
        const [movie, setMovie] = useState([])
        var [toggleCount, setToggleCount] = useState(0)

        const getMovieByID = () => {
            GolbalApi.getMovieByGenreId(movieId).then(res => {
                setMovie(res.data.results)
            })
        }

        useEffect(() => {
            getMovieByID();
        }, [])

        const targetRef = useRef();

        const sliderLeft = (ele) => {
            ele.scrollLeft -= screenWidth - 1228
            setToggleCount(toggleCount-=1)
        }
        const sliderRight = (ele) => {
            ele.scrollLeft += screenWidth - 1228
            setToggleCount(toggleCount+=1)
        }


    return (
        <div>
            {toggleCount >= 1 ? <HiOutlineChevronLeft 
            className={`hidden md:block absolute w-[45px] h-[45px] ml-2 bg-transparent text-white text-3xl ${index_%3===0 ? "mt-[122.5px]" : "mt-[200px]" } left-5 rounded-full hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer duration-300`}
            onClick={()=>sliderLeft(targetRef.current)}
            /> : <></>}

            {toggleCount <= 5 ? <HiOutlineChevronRight 
                className={`hidden md:block absolute w-[45px] h-[45px] mr-2 bg-transparent text-white text-3xl ${index_%3===0 ? "mt-[122.5px]" : "mt-[200px]" } right-5 rounded-full hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer duration-300`}
                onClick={()=>sliderRight(targetRef.current)}
            /> : <></>}


            <div ref={targetRef} className='pl-4 pr-8 md:pl-8 md:pr-8 transition-all hover:duration-300 ease-in-out flex gap-5 overflow-x-auto scrollbar-none scroll-smooth'>
                {movie.map((item, index) => (
                    <>
                    {index_%3===0 ? <HrMovieCard movieBackDrop={item}/> : <MovieCard moviePoster={item}/>}
                    </>
                ))}
            </div>


        </div>
    )
}

export default MovieList

//hover:pl-2 pt-4 pb-4 md:pt-8 md:pb-8 md:hover:pl-8 md:hover:pr-8