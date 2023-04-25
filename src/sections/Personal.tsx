import React, { useEffect, useRef, useState } from 'react'
import { MdWavingHand } from 'react-icons/md'
import { TfiLinkedin } from 'react-icons/tfi'
import { FiMail, FiGithub } from 'react-icons/fi'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Personal = () => {
  gsap.registerPlugin(ScrollTrigger);
  const role = ['Front-end Developer', 'Back-end Developer']
  const titleRef: any = useRef(null)
  const imgRef = useRef(null)
  useEffect(() => {
    let cur = 0
    const rolesItem = document.getElementsByClassName('role-item')
    const interval = setInterval(() => {
      for (let i = 0; i < role.length; i++) {
        const item = rolesItem[i]
        cur === i ? item.classList.remove('hidden') : item.classList.add('hidden')
      }
      if (cur < role.length - 1) {
        cur++
      } else {
        cur = 0
      }
    }, 2000)
    const offTop = titleRef.current?.offsetTop
    gsap.to(titleRef.current, {
      duration: 1,
      x: -200,
      scrollTrigger: {
        trigger: titleRef.current,
        start: offTop - 100,
        end: "+=150",
        scrub: true,
      }
    })
    gsap.to(imgRef.current, {
      duration: 1,
      x: 200,
      scrollTrigger: {
        trigger: imgRef.current,
        start: offTop - 100,
        end: "+=150",
        scrub: true,
      }
    })
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className='h-[100vh] bg-gradient-to-r from-[#274046] dark:from-[#b3b8b3] to-[#616161] dark:to-[#f3f3f3] flex items-center justify-center gap-10 select-none '>
      <div ref={titleRef} className="flex flex-col text-white dark:text-black">
        <h3 className='flex items-center gap-2 text-xl uppercase text-white dark:text-black '>Hi there <MdWavingHand  className='fill dark:fill-black' color='rgb(202 138 4)' size={20} />, I'm</h3>
        <div className="mt-8 mb-4">
          <h2 className='text-5xl font-semibold uppercase text-white dark:text-black'>Nguyễn Thái Khánh Duy</h2>
        </div>
        {role.map((item: any, idx: any) => (
          <div className={`text-2xl animate-bounce role-item hidden`} key={idx}>
            <h3 className='text-white dark:text-black'>{item.split(' ')[0]}<br /> {item.split(' ')[1]}</h3>
          </div>
        ))}
        <div className="flex items-center justify-start mt-4 gap-6 ">
          <a href='/' className="rounded-full border-2 p-2 social-item relative border-white dark:border-black">
            <TfiLinkedin className='fill dark:fill-black' />
            <span className="hidden text-xs text-black absolute top-full px-2 rounded-lg bg-gray-300 left-1/2 mt-1 -translate-x-1/2">LinkedIn</span>
          </a>
          <a href='/' className="rounded-full border-2 p-2 social-item relative border-white dark:border-black">
            <FiMail className='fill dark:fill-black' />
            <span className="hidden text-xs text-black absolute top-full px-2 rounded-lg bg-gray-300 left-1/2 mt-1 -translate-x-1/2">Gmail</span>
          </a>
          <a href='/' className="rounded-full border-2 p-2 social-item relative border-white dark:border-black">
            <FiGithub className='fill dark:fill-black' />
            <span className="hidden text-xs text-black absolute top-full px-2 rounded-lg bg-gray-300 left-1/2 mt-1 -translate-x-1/2">Github</span>
          </a>

        </div>
      </div>
      <div ref={imgRef} className="relative w-96 h-96">
        <div className="w-96 h-96 bg-gray-300 rounded-full  animate-scale"></div>
        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2' src="/aaa.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Personal