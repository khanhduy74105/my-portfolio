import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MdMail } from 'react-icons/md'
const AboutSection = () => {
    const ref: any = useRef(null)
    const timeLineRef: any = useRef(null)
    const lineRef = useRef(null)
    const contentRef: any = useRef([])
    gsap.registerPlugin(ScrollTrigger)
    const addToContentRef = (el: any) => {
        if (el && !contentRef.current.includes(el)) {
            contentRef.current.push(el)
        }
    }
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        contentRef.current.forEach((el: any, index: any) => {
            gsap.to(el.childNodes[0], {
                x: 0,
                duration: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: el.childNodes[0],
                    start: 'top center+=300',
                    end: "bottom bottom-=100",
                    id: `section-${index + 1}`,
                    scrub: true,
                    markers: true
                }
            })
        })
    }, [])
    return (
        <div ref={ref} className={`flex flex-col bg-black dark:bg-white p-10`}>
            {/* who */}
            <div className="who flex items-center justify-center gap-16 p-10">
                <div className="max-w-full">
                    <h1 className="text-3xl text-[#7986CB] tracking-wide font-bold">{'Me.who()'}</h1>
                    <p className='my-4 text-xl text-white dark:text-black'>
                        I'm Nguyễn Thái Khánh Duy, a software engineer, Front-end developer. I'm living in Đà Nẵng city
                        <br/>
                        I'm currently studying at Vietnam - Korea University of Information and Communication Technology and my major is information technology. I have started studied since 2021.
                        <br/>
                        My desire is to find a chance to learn further more about web
                        development and participate in real project.
                        <br/>
                        I'm looking for jobs working as an Intern Front End or Back
                        End Developer or both.
                    </p>
                    <a className='border-2 border-white dark:border-black rounded-md flex w-fit p-2 items-center justify-around' href="mailto:duyntk74105@gmail.com">
                        <span className='block text-white dark:text-black'> Get in touch</span>
                        <MdMail className='fill-white dark:fill-black' />
                    </a>
                </div>
                <div className="w-1/4 ">
                    <img className='w-full' src="/aaa.jpeg" alt="" />
                </div>
            </div>
            {/* Timeline */}
            <div id="timeline" className='px-10' >
                <div ref={timeLineRef} className="w-full flex justify-center relative z-[1]">
                    <h1 className='w-full text-center border-t-[1px] border-b-[1px] text-main border-main py-4 text-3xl font-bold tracking-wider'>{'Me.timeline()'}</h1>
                    <div ref={lineRef} className="absolute h-[8rem] w-2 bg-main top-full mt-4">
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-t-[30px] border-l-[20px] border-r-[20px] border-t-main border-transparent"></div>
                    </div>
                </div>

                <div className="mt-[5rem] pt-20 bg-black dark:bg-white">
                    <div ref={addToContentRef} className="flex items-center justify-center gap-20">
                        <div className="w-full -translate-x-24 opacity-0">
                            <h1 className='text-white dark:text-black text-2xl'>Education</h1>
                            <div className="flex flex-row justify-between">
                                <div className=" text-xl dark:text-black">
                                    Vietnam - Korea University of Information and Communication Technology
                                </div>
                                <div className=" text-xl dark:text-black">
                                    2021 - Now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-20"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection