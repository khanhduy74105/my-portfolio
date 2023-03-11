import { FaMapMarkerAlt } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {NavLink} from 'react-router-dom'
const Header = () => {
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        const element = ref.current
        const mq = window.matchMedia("(max-width: 40em)");
        if (mq.matches) {
            gsap.to(element, {
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                backgroundColor: '#000',
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
                backgroundColor: '#000',
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

    }, [])

    return (
        <div ref={ref} className='h-20 py-3 px-6 flex items-center justify-between fixed top-0 right-0 left-0 z-10'>
            <ul className="flex items-center gap-16">
                <NavLink to={'about'} className={({isActive}) => `hover:bg-[#efeaea41] cursor-pointer px-4  py-1 text-xl  ${isActive ? 'font-semibold text-white':'font-medium text-gray-300'}`}>About</NavLink>
                <NavLink to={'projects'} className={({isActive}) => `hover:bg-[#efeaea41] cursor-pointer px-4  py-1 text-xl  ${isActive ? 'font-semibold text-white':'font-medium text-gray-300'}`}>Projects</NavLink>
                <NavLink to={'skills'} className={({isActive}) => `hover:bg-[#efeaea41] cursor-pointer px-4  py-1 text-xl  ${isActive ? 'font-semibold text-white':'font-medium text-gray-300'}`}>Skills</NavLink>
            </ul>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xl"><FaMapMarkerAlt size={24} /> Đà Nẵng, Việt Nam</div>
                <span>|</span>
                <div className="text-xl rounded-md px-2 border-2">Resume</div>
            </div>
        </div>
    )
}

export default Header