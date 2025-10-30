import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
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
    return (
        <div className=" absolute top-0 z-50  w-full flex items-center  ">
            {windowWidth > 1100 ?
                <div className="navbar bg-black/95 h-16 w-full backdrop-blur-2xl ">
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
                </div> : <div className=" bg-black/90 h-16 w-full flex justify-between ">
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
export default Nav;