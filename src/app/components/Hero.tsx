import React from 'react'
import Logo from '@/public/logo.svg'
const Hero = () => {
    return(
        <>
        <div className='h-screen w-screen z-0 bg-cover bg-slate-500 top-0 flex justify-evenly items-center ' >
            <Logo className="h-[50px] md:h-[130px] translate-y-32"/>
        </div>
        </>
    )

}

export default Hero