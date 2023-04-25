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
                    start: 'top center+=200',
                    end: "bottom bottom-=100",
                    id: `section-${index + 1}`,
                    scrub: true,
                }
            })
            gsap.to(el.childNodes[1], {
                x: 0,
                duration: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: el.childNodes[1],
                    start: 'top center+=200',
                    end: "bottom bottom-=100",
                    id: `section-${index + 1}`,
                    scrub: true,
                }
            })
        })
    }, [])
    return (
        <div ref={ref} className={`flex flex-col bg-black dark:bg-white p-10`}>
            {/* who */}
            <div className="who flex items-center justify-center gap-16 py-10">
                <div className="max-w-[40%]">
                    <h1 className="text-3xl text-[#7986CB] tracking-wide font-bold">{'Me.who()'}</h1>
                    <p className='my-4 text-white dark:text-black'>
                        I'm Nguyễn Thái Khánh Duy, a software engineer, Front-end developer. I'm living in Đà Nẵng city
                        <br />
                        I'm currently studying at Vietnam - Korea University of Information and Communication Technology and my major is information technology. I have started studied since 2021.
                    </p>
                    <a className='border-2 border-white dark:border-black rounded-md flex w-fit p-2 items-center justify-around' href="mailto:duyntk74105@gmail.com">
                        <span className='block text-white dark:text-black'> Get in touch</span>
                        <MdMail className='fill-white dark:fill-black'/>
                    </a>
                </div>
                <div className="max-w-[40%]">
                    <img className='w-full' src="/aaa.jpeg" alt="" />
                </div>
            </div>
            {/* Timeline */}
            <div id="timeline" >
                <div ref={timeLineRef} className="w-full flex justify-center relative z-[1]">
                    <h1 className='w-3/4 text-center border-t-[1px] border-b-[1px] text-main border-main py-4 text-4xl font-bold tracking-wider'>{'Me.timeline()'}</h1>
                    <div ref={lineRef} className="absolute h-[10rem] w-2 bg-main top-full mt-4">
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-t-[30px] border-l-[20px] border-r-[20px] border-t-main border-transparent"></div>
                    </div>
                </div>

                <div className="mt-[5rem] pt-40 bg-black dark:bg-white">
                    <div ref={addToContentRef} className="flex items-center p-10 justify-center gap-20">
                        <div className="w-2/5 -translate-x-24 opacity-0">
                            <p className='text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere dolorem ipsum iusto animi corporis voluptatem reprehenderit in consequatur ex voluptatibus aspernatur, consectetur similique dolorum optio ipsa sequi a illum.
                                Ullam ex totam voluptatem illo fuga sit necessitatibus quae neque voluptates vitae repellendus dicta explicabo ab enim, fugiat, sint error deleniti ut reprehenderit, incidunt dolore maxime blanditiis. Adipisci, consequuntur cum!</p>
                        </div>
                        <div className="w-2/5 translate-x-24 opacity-0 text-white dark:text-black">content</div>
                    </div>
                    <div ref={addToContentRef} className="flex items-center p-10 justify-center gap-20">
                        <div className="w-2/5 -translate-x-24 opacity-0 ">content</div>
                        <div className="w-2/5 translate-x-24 opacity-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque porro dolores blanditiis ad molestiae eius quia, commodi neque eum voluptatum. Iure rerum cupiditate at modi totam expedita dicta iste facilis.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection