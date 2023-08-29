import {React, useEffect, useState, useRef} from 'react'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi2'

import GolbalApi from '../services/GolbalApi'
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"; 
const screenWidth = window.innerWidth; 

const Slider = () => {

    const [movieList, setMovieList] = useState([])
    
    const getTrendingMovie = () => {
        GolbalApi.getTrendingVideos.then(resp => {
            setMovieList(resp.data.results)
        })
    }    
        
    useEffect(() => {
        getTrendingMovie();
    }, []);
    
    const targetRef = useRef();

    const sliderLeft = (ele) => {
        ele.scrollLeft -= screenWidth - 128
    }
    const sliderRight = (ele) => {
        ele.scrollLeft += screenWidth - 128
    }



    return (
        <div>
            <HiOutlineChevronLeft 
                className='hidden md:block absolute w-[45px] h-[45px] bg-transparent text-white text-3xl mt-[225px] left-5 rounded-full hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer duration-300'
                onClick={()=>sliderLeft(targetRef.current)}
            />
            <HiOutlineChevronRight 
                className='hidden md:block absolute w-[45px] h-[45px] bg-transparent text-white text-3xl mt-[225px] right-5 rounded-full hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer duration-300'
                onClick={()=>sliderRight(targetRef.current)}
            />
            <div 
                className='flex overflow-x-auto px-10 md:px-20 py-8 w-full scrollbar-none scroll-smooth'
                ref={targetRef} 
            >
                {movieList.map((item, index) => (
                    <img
                        key={index}
                        src={IMG_BASE_URL+item.backdrop_path}
                        className='min-w-full md:h-[450px] object-cover mr-8 rounded-xl hover:border-[4px] border-gray-300 transition-all duration-100 ease-in shadow-lg shadow-gray-900'
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
