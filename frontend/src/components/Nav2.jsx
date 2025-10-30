import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

function Nav2(){
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
    
            // Cleanup listener on unmount
            return () => {
                window.removeEventListener("resize", handleResize);
            };
    
        }, [])
        
    const navref=useRef(null);

     useGSAP(() => {
        gsap.to(navref.current, {
            opacity: 1,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
                trigger: navref.current,
                start: "top -10%",
                end: "top -35%",
                scrub: true,
            }
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [])

 
    return(
        <div ref={navref} className=" opacity-0 fixed backdrop-blur-3xl justify-between top-0 z-20 w-full flex-row flex h-15 bg-[#1D1D1F]/50 border-b-2 border-[#495057]">
             {windowWidth > 1100 ?
                <div className="navbar  h-16 w-full backdrop-blur-2xl ">
                    <div className=" flex items-center justify-center h-full w-24">
                        <img src="/logo.png" className=" h-full w-full object-cover" alt="" />
                    </div>
                    <div className=" h-full w-[50rem]">

                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 gap-25">
                            <li className=" text-xl text-white"><a href="/">Home</a></li>
                            <li className=" text-xl text-white"><a href="#pricing-section">About</a></li>
                            <li className=" text-xl text-white"><Link >Domestic Tours</Link></li>
                            <li className=" text-xl text-white"><Link >International Tours</Link></li>

                        </ul>
                    </div>
                </div> : <div className="  h-16 w-full flex justify-between ">
                    <div className=" flex items-center justify-center h-full w-[5rem] ">
                        <img src="/logo.png" className=" h-full w-full object-cover" alt="" />
                    </div>
                    <div className="flex flex-row gap-5 justify-end items-center p-5">
                        <Link><h1 className=" font-semibold text-white text-xl">Home</h1></Link>
                        <Link><h1 className=" font-semibold text-white text-xl">About</h1></Link>
                        <div className=" w-full flex items-center justify-center">
                        <details className="dropdown  ">
                            <summary className="btn shadow-none bg-transparent relative  text-white border-none"><i className=" text-white font-bold text-2xl fa-solid fa-bars"></i></summary>
                            <ul className="menu absolute top-12 right-0 dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow-md">
                                <li><Link >Domestic Tours</Link></li>
                                <li><Link >International Tours</Link></li>
                            </ul>
                        </details>
                        </div>


                    </div>

                </div>
            }
            </div>
    )
}
export default Nav2;