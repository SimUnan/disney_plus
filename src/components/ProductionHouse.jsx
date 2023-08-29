import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import disneyV from '../assets/video/disney.mp4'
import marvelV from '../assets/video/marvel.mp4'
import nationalGeographicV from '../assets/video/national-geographic.mp4'
import pixarV from '../assets/video/pixar.mp4'
import starWarsV from '../assets/video/star-wars.mp4'

const ProductionHouse = () => {

    const imgAndVdoList = [
        {
            id: 1,
            img: disney,
            vdo: disneyV
        },
        {
            id: 2,
            img: pixar,
            vdo: pixarV
        },
        {
            id: 3,
            img: marvel,
            vdo: marvelV
        },
        {
            id:4,
            img: starwar,
            vdo: starWarsV
        },
        {
            id: 5,
            img: nationalG,
            vdo: nationalGeographicV
        },
    ]

    return (
        <div className='grid grid-cols-2 md:flex px-10 md:px-20 py-5 gap-3 md:gap-5'>
        {imgAndVdoList.map((item, index) => (
            <div className='relative border-[2px] border-stone-300 rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
            <video src={item.vdo} autoPlay playsInline loop muted
            className='w-full absolute top-0 z-0 opacity-0 hover:opacity-50 rounded-md'/>
            <img src={item.img} className='w-full z-[1] opacity-100'/>
        </div>
        ))}
        </div>
    )
}

export default ProductionHouse
