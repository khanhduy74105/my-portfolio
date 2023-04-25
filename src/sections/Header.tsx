import { FaMapMarkerAlt } from 'react-icons/fa'
import { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { NavLink } from 'react-router-dom'
import { BsMoonStars } from 'react-icons/bs'
import { Theme } from './ThemeProvider'
import { MdSunny } from 'react-icons/md'
const Header = () => {
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    const { isDarkMode, setIsDarkMode } = useContext(Theme)

    const onChangeTheme = () => {
        setIsDarkMode((value: any) => !value)
    }
    useEffect(() => {
        const element = ref.current
        const mq = window.matchMedia("(max-width: 40em)");


        if (mq.matches) {
            gsap.to(element, {
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                borderRadius: "0 0 20px 20px",
                border: "3px solid white",
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom+=100 top",
                    end: "+=250",
                    scrub: true
                }
            })
        } else {
            gsap.to(element, {
                position: "fixed",
                top: "1rem",
                left: "5rem",
                right: "5rem",
                borderRadius: "1rem",
                border: "3px solid white",
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom+=100 top",
                    end: "+=250",
                    scrub: true
                }
            })
        }




    }, [isDarkMode])


    return (
        <div ref={ref} className={`h-20 py-3 px-6 flex items-center justify-between fixed top-0 right-0 left-0 z-10 bg-gradient-to-r from-[#274046] dark:from-[#b3b8b3] to-[#616161] dark:to-[#f3f3f3]`}>
            <ul className="flex items-center gap-16">
                <NavLink to={'about'} className={({ isActive }) => `text-white dark:text-black hover:bg-[#efeaea41] cursor-pointer px-4  py-1 text-xl  ${isActive ? 'font-semibold text-white' : 'font-medium text-gray-300'}`}>About</NavLink>
                <NavLink to={'projects'} className={({ isActive }) => `text-white dark:text-black hover:bg-[#efeaea41] cursor-pointer px-4  py-1 text-xl  ${isActive ? 'font-semibold text-white' : 'font-medium text-gray-300'}`}>Projects</NavLink>
                <NavLink to={'skills'} className={({ isActive }) => `text-white dark:text-black hover:bg-[#efeaea41] cursor-pointer px-4  py-1 text-xl  ${isActive ? 'font-semibold text-white' : 'font-medium text-gray-300'}`}>Skills</NavLink>
            </ul>

            <div className="flex items-center gap-4 text-white dark:text-black">
                <div className="w-10 h-10 rounded-full border-white dark:border-black border-2 flex items-center justify-center cursor-pointer " onClick={onChangeTheme}>
                    {isDarkMode ? <BsMoonStars fill='black' /> : <MdSunny />}
                </div>
                <div className="flex items-center gap-2 text-xl text-white dark:text-black"><FaMapMarkerAlt fill={!isDarkMode ? "white" : "black"} size={24} />Đà Nẵng, Việt Nam</div>
                <span className='text-white dark:text-black'>|</span>
                <a className="text-xl rounded-md px-2 border-white dark:border-black border-2 text-white dark:text-black" download={true} href='/aaa.jpeg'>Resume</a>
            </div>
        </div>
    )
}

export default Header