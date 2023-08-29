import {React} from 'react'
import GenresList from '../constants/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {

    return (

        <div className=''>
            {GenresList.genere.map((item,index) => index<10&& (
                <div className='px-10 md:px-20 py-5'>
                    <p className='uppercase text-gray-100 font-semibold text-xl cursor-default'>{item.name}</p>
                    <MovieList movieId={item.id} index_={index}/>
                </div>
            ))}
        </div>

    )
}

export default GenreMovieList
