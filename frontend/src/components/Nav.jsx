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
        <div className=" fixed top-0 z-50  w-full flex items-center  ">
            {windowWidth > 1100 ?
                <div className="navbar bg-black/95 h-16 w-full backdrop-blur-2xl ">
                    <div className=" flex items-center justify-center h-full w-24">
                        <img src="/logo.png" className=" h-full w-full object-cover" alt="" />
                    </div>
                    <div className=" h-full w-[50rem]">

                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 gap-25">
                            <li className=" text-xl text-white underline"><a href="#">Home</a></li>
                            <li className=" text-xl text-white"><a href="#pricing-section">About</a></li>

                            <li>
                                <details>
                                    <summary className=" text-xl text-white">Tours</summary>
                                    <ul className="bg-black/80 rounded-t-none p-2 w-60">
                                        <li className=" text-xl p-1"><Link >Domestic Tours</Link></li>
                                        <li className=" text-xl p-1"><Link >International Tours</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div> : <div className="navbar bg-black/90 h-16 w-full backdrop-blur-2xl">
                  <div className=" flex items-center justify-center h-full w-24">
                        <img src="/logo.png" className=" h-full w-full object-cover" alt="" />
                    </div>
                    <div className="flex-none">
                        <div className="flex-none">
                            {windowWidth <= 1100 && (
                                <div className="drawer">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer" className="drawer-button p-2">
                                            <i className="text-2xl font-semibold text-white fa-solid fa-bars"></i>
                                        </label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
                                            <li className=" text-xl"><a href="#">Home</a></li>
                                            <li className=" text-xl"><a href="#pricing-section">Pricings</a></li>
                                            <li>
                                                <details>
                                                    <summary className=" text-xl">Rent Cars</summary>
                                                    <ul className="bg-base-100 rounded-t-none p-2 w-32">
                                                        <li className=" text-xl p-1"><Link to={"/cars/swift"}>Swift</Link></li>
                                                        <li className=" text-xl p-1"><Link to={"/cars/ertiga"}>Ertiga</Link></li>
                                                        <li className=" text-xl p-1"><Link to={"/cars/bus"}>Bus</Link></li>
                                                        <li className=" text-xl p-1"><Link to={"/cars/innova"}>Innova</Link></li>
                                                        <li className=" text-xl p-1"><Link to={"/cars/amaze"}>Amaze</Link></li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}
export default Nav;