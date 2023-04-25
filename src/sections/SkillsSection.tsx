import React, { useEffect, useRef } from 'react'
import { DiJava, DiMongodb } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiMysql, SiTypescript } from 'react-icons/si'
import { IconContext } from "react-icons";
import {TbBrandNextjs} from 'react-icons/tb'

const SkillsSection = () => {
  const ref: any = useRef()
  const skills = [
    {
      img: FaReact,
      name: 'ReactJS',
      description: "Have knowledge of hooks, able to use reactjs to a relatively good level",
      color: '#3ebfe3'
    },
    {
      img: SiTypescript,
      name: 'Typescript',
      description: "the ability to understand and deal with Typescript",
      color: '#3178c6'
    },
    {
      img: TbBrandNextjs,
      name: 'NextJs',
      description: "Basic knowledge (Beginning level)",
      color: 'black'
    },
    {
      img: SiMysql,
      name: 'SQL DB',
      description: "the ability to understand and deal with Relational DB",
      color: '#DD8A00'
    },
    {
      img: DiMongodb,
      name: 'MongoDB',
      description: "the ability to understand and deal with NoSQL specially MongoDB",
      color: '#00ED64'
    },
    {
      img: DiJava,
      name: 'OOP',
      description: "have a background in oop",
      color: '#477898'
    },
  ]
  useEffect(()=>{
    ref.current.scrollIntoView({behavior: "smooth"})
  },[])
  return (
    <div className='bg-black dark:bg-white p-10 flex items-center justify-center flex-col min-h-screen'>
      <div className=" w-3/5">
        <span className='relative after:absolute after:w-2/3 after:h-1 text-main font-bold text-3xl after:bg-main after:top-full after:left-0 after:rounded-xl'>Skill-set</span>
      </div>
      <div ref={ref} className='flex flex-wrap justify-between mt-6 w-3/5 gap-6'>
          {skills.map((item:any, idx:any)=>(
            <div className={`${item.name == "NextJs" ? 'border-2 border-white': ''} hover:scale-105 transition-all flex w-[46%] items-center p-4 rounded-lg justify-center gap-6 cursor-pointer`} style={{backgroundColor: item.color}} onClick={()=>{}}>
              <div className={`w-20 h-20 flex items-center justify-center bg-black rounded-full ${item.name == "NextJs" ? 'border-2 border-white': ''}`}>
                  <item.img className={`text-5xl`} style={{fill: item.color}}/>
              </div>
              <div className="w-2/3">
                <h1 className='text-2xl'>{item.name}</h1>
                <p className=''>{item.description}</p>
              </div>
            </div>
          ))}

        
      </div>
    </div>
  )
}

export default SkillsSection