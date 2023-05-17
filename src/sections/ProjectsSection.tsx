import { useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt';
import { DiReact, DiMongodb } from 'react-icons/di'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
const ProjectsSection = () => {
  const ref: any = useRef(null)
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [])
  return (
    <div ref={ref} className='bg-black dark:bg-white p-12 flex flex-col gap-20'>
      <div className="px-10 flex justify-around items-center border-b-2 pb-4 border-white">
        <div className="select-none">
          <h1 className='text-4xl font-bold uppercase text-white dark:text-black '>My Portfolio</h1>
        </div>
        <Tilt className="w-3/5 h-[500px] relative">
          <img className='w-full h-full object-contain' src="https://user-images.githubusercontent.com/104473291/234280315-af8aa935-a729-485c-807c-73b99ab7a921.png" alt="" />
          <a className="absolute bottom-4 -translate-x-1/2 left-1/2 px-3 py-1 text-lg cursor-pointer hover:opacity-70 rounded-lg bg-white text-black dark:text-white dark:bg-black" href='https://github.com/khanhduy74105/my-portfolio'>View source in Github </a>
        </Tilt>
      </div>
      <div className="px-10 flex justify-around items-center border-b-2 pb-4 border-[#aa6dd7]">
        <div className="select-none">
          <h1 className='text-4xl font-bold uppercase text-[#aa6dd7] '>Zingmp3 Clone</h1>
          <div className="mt-6">
            <h1 className='text-2xl'>Tech stacks:</h1>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3b92c1]'><DiReact style={{ backgroundColor: '#3b92c1' }} /> ReactJS</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#4173de]'><SiTypescript style={{ backgroundColor: '#4173de' }} />TypeScript</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3bc1a2]'><SiTailwindcss style={{ backgroundColor: '#3bc1a2' }} /> Tailwind</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#24a688]'><FaNodeJs style={{ backgroundColor: '#24a688' }} /> NodeJs,ExpressJs,MySQL</h3>
            <h3 className='text-xl mt-1 px-2'>Etc...</h3>
          </div>
        </div>
        <Tilt className="w-3/5 h-[500px] relative">
          <img className='w-full h-full object-contain' src="https://user-images.githubusercontent.com/104473291/224060694-d36eb600-3d0d-4a5f-be28-461e37b325ef.png" alt="" />
          <a className="absolute bottom-4 -translate-x-1/2 left-1/2 px-3 py-1 text-lg cursor-pointer hover:opacity-70 rounded-lg bg-[#aa6dd7]" href='https://github.com/khanhduy74105/music-app'>View source in Github </a>
        </Tilt>
      </div>
      <div className="px-10 flex justify-around items-center border-b-2 pb-4 border-[#FE615D]">
        <div className="select-none">
          <h1 className='text-4xl font-bold uppercase text-[#fdb664] '>Ecommerce website:<br /> Davici</h1>
          <div className="mt-6">
            <h1 className='text-2xl'>Tech stacks:</h1>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3b92c1]'><DiReact style={{ backgroundColor: '#3b92c1' }} /> ReactJS</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3bc1a2]'><SiTailwindcss style={{ backgroundColor: '#3bc1a2' }} /> Tailwind</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3bc1a2]'><FaNodeJs style={{ backgroundColor: '#3bc1a2' }} />NodeJs, ExpressJs, MongoDB</h3>

            <h3 className='text-xl mt-1 px-2'>Etc...</h3>
          </div>
        </div>
        <Tilt className="w-3/5 h-[500px] relative">
          <img className='w-full h-full object-contain' src="https://user-images.githubusercontent.com/104473291/224475194-a7338c92-91fc-4cf6-b1a9-9074454c7b85.png" alt="" />
          <a className="absolute bottom-4 -translate-x-1/2 left-1/2 px-3 py-1 text-lg cursor-pointer hover:opacity-70 rounded-lg bg-[#fdb664]" href='https://github.com/khanhduy74105/davici-web-app'>View source in Github </a>
        </Tilt>
      </div>
      <div className="px-10 flex justify-around items-center border-b-2 pb-4 border-[#FE615D]">
        <div className="select-none">
          <h1 className='text-4xl font-bold uppercase text-[#FE615D] '>Airbnb clone</h1>
          <div className="mt-6">
            <h1 className='text-2xl'>Tech stacks:</h1>
            <h3 className='text-white dark:text-black text-xl mt-1 px-2 flex items-center gap-3'><TbBrandNextjs style={{ backgroundColor: 'black' }} /> NextJs</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3bc1a2]'><SiTailwindcss style={{ backgroundColor: '#3bc1a2' }} /> Tailwind</h3>
            <h3 className='text-xl mt-1 px-2 flex items-center gap-3 text-[#3bc1a2]'><DiMongodb style={{ backgroundColor: '#3bc1a2' }} /> MongoDB</h3>

            <h3 className='text-xl mt-1 px-2'>Etc...</h3>
          </div>
        </div>
        <Tilt className="w-3/5 h-[500px] relative">
          <img className='shadow-lg w-full h-full object-contain' src="https://user-images.githubusercontent.com/104473291/234190032-eccceccf-51ac-4d37-81cc-8973aca091fc.png" alt="" />
          <a className="absolute bottom-4 -translate-x-1/2 left-1/2 px-3 py-1 text-lg cursor-pointer hover:opacity-70 rounded-lg bg-[#FE615D]" href='https://github.com/khanhduy74105/airbnb-clone-nextjs'>View source in Github </a>
        </Tilt>
      </div>
      <a className="flex items-center justify-center hover:opacity-70" href='/'>
        <div className="px-4 py-2 gap-2 rounded-lg bg-white dark:bg-black  flex items-center justify-center">
          <a className="w-fit text-xl dark:text-white text-black" href='https://github.com/khanhduy74105'>View more in my Github </a>
          <FiGithub size={40} className='fill-black dark:fill-white' />
        </div>
      </a>
    </div>
  )
}

export default ProjectsSection