import React from 'react'

const HeaderItem = ({name, Icon}) => {
    return (
        <div>
            <li className='flex items-center gap-2 text-md md:text-xl '>
                <Icon />
                <p 
                className='
                uppercase
                text-white
                hover:underline
                underline-offset-8
                transition-all 
                cursor-pointer 
                text-lg
                sm:text-xl
                '
                >{name}</p>
            </li>
        </div>
    )
}

export default HeaderItem
