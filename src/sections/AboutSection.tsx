import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const AboutSection = () => {
    const ref:any = useRef(null)
    const timeLineRef:any = useRef(null)
    const lineRef = useRef(null)
    const contentRef:any = useRef([])
    gsap.registerPlugin(ScrollTrigger)
    const addToContentRef = (el:any)=>{
        if (el && !contentRef.current.includes(el)) {
            contentRef.current.push(el)
        }
    }
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        gsap.to(timeLineRef.current,{
            position: 'fixed',
            top: '100px',
            left:0,
            right:0,
            duration:1,
            scrollTrigger:{
                trigger: timeLineRef.current,
                start: 'top top+=100',
                end: '+=100',
                scrub:true,
            }
        })
        gsap.to(lineRef.current,{
            height:"3rem",
            duration:1,
            scrollTrigger:{
                trigger: lineRef.current,
                start: 'top top+=200',
                end: '+=100',
                scrub:true,
            }
        })
        contentRef.current.forEach((el:any, index:any)=>{
            gsap.to(el.childNodes[0],{
                x: 0,
                duration: 1,
                opacity:1,
                scrollTrigger: {
                    trigger: el.childNodes[0],
                    start: 'top center+=200',
                    end: "bottom bottom-=200",
                    id: `section-${index+1}`,
                    scrub: true,
                    markers:true
                }
            })
            gsap.to(el.childNodes[1],{
                x: 0,
                duration: 1,
                opacity:1,
                scrollTrigger: {
                    trigger: el.childNodes[1],
                    start: 'top center+=200',
                    end: "bottom bottom-=200",
                    id: `section-${index+1}`,
                    scrub: true,
                    markers:true
                }
            })
        })
    }, [])
  return (
    <div ref={ref} className={`flex flex-col bg-black p-10`}>
        {/* who */}
        <div className="who flex items-center justify-center gap-16 py-10">
            <div className="max-w-[40%]">
                <h1 className="text-3xl text-[#7986CB] tracking-wide font-bold">{'Me.who()'}</h1>
                <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eveniet obcaecati, a sequi laboriosam pariatur tenetur molestias magnam, enim nisi sapiente eaque! Non voluptates recusandae repellat amet et, harum voluptatem?
                Molestiae culpa nam laboriosam voluptates dolore iusto nulla quasi exercitationem, consequatur accusamus in! Voluptas optio ipsa ea assumenda impedit. Quidem voluptates molestias, dolorum delectus eligendi minus tempora fugiat assumenda! Labore!</p>
                <h3>Contact me</h3>
            </div>
            <div className="max-w-[40%]">
                <img className='' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
        {/* Timeline */}
        <div className="timeline">
            <div ref={timeLineRef} className="w-full flex justify-center relative">
                <h1 className='w-3/4 text-center border-t-[1px] border-b-[1px] text-main border-main py-4 text-4xl font-bold tracking-wider'>{'Me.timeline()'}</h1>
                <div ref={lineRef} className="absolute h-[15rem] w-2 bg-main top-full mt-4">
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-t-[30px] border-l-[20px] border-r-[20px] border-t-main border-transparent"></div>
                </div>
            </div>

            <div className="mt-[5rem] pt-40">
                <div ref={addToContentRef} className="flex items-center p-10 justify-center gap-20">
                    <div className="w-2/5 -translate-x-24 opacity-0">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere dolorem ipsum iusto animi corporis voluptatem reprehenderit in consequatur ex voluptatibus aspernatur, consectetur similique dolorum optio ipsa sequi a illum.
                        Ullam ex totam voluptatem illo fuga sit necessitatibus quae neque voluptates vitae repellendus dicta explicabo ab enim, fugiat, sint error deleniti ut reprehenderit, incidunt dolore maxime blanditiis. Adipisci, consequuntur cum!</p>
                    </div>
                    <div className="w-2/5 translate-x-24 opacity-0">content</div>
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