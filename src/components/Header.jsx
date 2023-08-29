import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import {HiPlus, HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem'



const Header = () => {

    const menu = [
        {
            name: "home",
            icon: HiHome
        },
        {
            name: "search",
            icon: HiMagnifyingGlass
        },
        {
            name: "watchlist",
            icon: HiStar
        },
        {
            name: "originals",
            icon: HiPlayCircle
        },
        {
            name: "movies",
            icon: HiTv
        },
        {
            name: "series",
            icon: HiPlus
        },
    ]

    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-full p-5 flex items-center justify-between'>
            {/* logo */}
            <div className='flex gap-10'>
                <img 
                src={Logo} 
                className='w-[110px] md:w-[144px] '
            />
            {/* menu */}
                <ul className='hidden md:flex items-center justify-center gap-8 flex-wrap text-xl'>
                    {menu.map((item) =>(
                        <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
                </ul>
            </div>
            {/* mobile nav */}
                <ul className='md:hidden flex items-center justify-center gap-5 flex-wrap text-xl '>
                    {menu.map((item, index)=> index<3 && (
                        <HeaderItem name={''} Icon={item.icon}/>
                    ))}
                    <HiDotsVertical onClick={() => {setToggle(!toggle)}}/>
                        {toggle && <div className='absolute top-[80px] right-[10px] bg-[#060b20] p-3 px-5 border-[1px] border-gray-950 rounded-lg duration-[1s] ease-in-out shadow-2xl shadow-[#0d1636]'>
                            {menu.map((item, index)=> index>=3 && (
                                <HeaderItem name={item.name} Icon={item.icon}/>
                            ))}
                        </div>}
                </ul>
                
            {/* profile */}
            <img 
                src='https://i.pinimg.com/originals/b6/15/6f/b6156feb974c66ead8193e93ebd13f78.jpg'
                className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full object-cover bg-no-repeat bg-cover'
            />
        </div>
    )
}

export default Header
