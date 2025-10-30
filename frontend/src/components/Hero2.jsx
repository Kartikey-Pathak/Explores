import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

function Hero2() {
    const ref2 = useRef(null);
    const txt2 = useRef(null);

    useGSAP(() => {
        const fadeIn = gsap.to(ref2.current, {
            opacity: 1,
            delay: 0.1,
            duration: 0.5,
            scrollTrigger: {
                trigger: ref2.current,
                start: "top 50%",
                end: "top 60%",
            },
        });

        // Slide-in animation for heading
        const textSlide = gsap.fromTo(
            txt2.current,
            {
                y: 120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt2.current,
                    start: "top 50%",
                    end: "top 60%",
                },
            }
        );

        // ✅ Proper cleanup
        return () => {
            fadeIn.scrollTrigger?.kill();
            fadeIn.kill();
            textSlide.scrollTrigger?.kill();
            textSlide.kill();
        };
    }, [])

    return (
        <section className=" flex items-center justify-center mt-14 flex-col bg-[#F2F2F6]">
            <h1 ref={txt2} className=" text-3xl md:text-4xl text-black font-bold">International Packages</h1>
            <div ref={ref2} className=" opacity-0 flex items-center justify-center w-full">
                <div className=" w-full md:w-[90%] flex items-center justify-center place-items-center  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10  mt-15 ">
                    <div className=" relative bg-black flex-shrink-0 h-[32rem] w-[22rem]  md:w-[23rem] xl:w-[25rem] border-[#F2F2F6] overflow-hidden rounded-3xl flex">
                        <img src="/goa.jpg" className=" h-full w-full object-cover object-top object-center" alt="" />
                        <div className=" bg-white  rounded-3xl absolute flex items-start justify-start flex-col   bottom-0 z-10 h-[13rem]  w-full ">
                            <h1 className=" font-bold text-2xl text-black m-5">Goa Tour Package</h1>
                            <h2 className=" font-semibold text-xl text-gray-500 ml-5">Goa</h2>
                            <div className=" flex flex-row  w-full items-center">
                                <h2 className=" font-bold text-xl text-gray-900 ml-5">Included</h2>
                                <div className=" flex flex-row gap-4 items-center justify-center">
                                    <i className=" font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
                                    <i class="fa-solid fa-taxi  font-bold text-2xl text-gray-500"></i>
                                    <i class="fa-solid fa-hotel font-bold text-2xl text-gray-500" ></i>
                                </div>
                            </div>
                            <div className=" flex flex-row items-center gap-4 justify-center  mt-3 w-full">
                                <div className=" w-[40%] h-12 bg-black cursor-pointer hover:bg-black/80 transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1>
                                </div>
                                <div className=" w-[40%] h-12 bg-[#adb5bd] cursor-pointer hover:bg-[#ced4da] transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-black">View Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" relative bg-black h-[32rem] flex-shrink-0 w-[22rem]  md:w-[23rem] xl:w-[25rem] border-[#F2F2F6] overflow-hidden rounded-3xl flex">
                        <img src="/goa.jpg" className=" h-full w-full object-cover object-top object-center" alt="" />
                        <div className=" bg-white  rounded-3xl absolute flex items-start justify-start flex-col   bottom-0 z-10 h-[13rem]  w-full ">
                            <h1 className=" font-bold text-2xl text-black m-5">Goa Tour Package</h1>
                            <h2 className=" font-semibold text-xl text-gray-500 ml-5">Goa</h2>
                            <div className=" flex flex-row  w-full items-center">
                                <h2 className=" font-bold text-xl text-gray-900 ml-5">Included</h2>
                                <div className=" flex flex-row gap-4 items-center justify-center">
                                    <i className=" font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
                                    <i class="fa-solid fa-taxi  font-bold text-2xl text-gray-500"></i>
                                    <i class="fa-solid fa-hotel font-bold text-2xl text-gray-500" ></i>
                                </div>
                            </div>
                            <div className=" flex flex-row items-center gap-4 justify-center  mt-3 w-full">
                                <div className=" w-[40%] h-12 bg-black cursor-pointer hover:bg-black/80 transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1>
                                </div>
                                <div className=" w-[40%] h-12 bg-[#adb5bd] cursor-pointer hover:bg-[#ced4da] transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-black">View Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>  <div className=" relative bg-black flex-shrink-0 h-[32rem] w-[22rem] xl:w-[25rem]  md:w-[23rem] border-[#F2F2F6] overflow-hidden rounded-3xl flex">
                        <img src="/goa.jpg" className=" h-full w-full object-cover object-top object-center" alt="" />
                        <div className=" bg-white  rounded-3xl absolute flex items-start justify-start flex-col   bottom-0 z-10 h-[13rem]  w-full ">
                            <h1 className=" font-bold text-2xl text-black m-5">Goa Tour Package</h1>
                            <h2 className=" font-semibold text-xl text-gray-500 ml-5">Goa</h2>
                            <div className=" flex flex-row  w-full items-center">
                                <h2 className=" font-bold text-xl text-gray-900 ml-5">Included</h2>
                                <div className=" flex flex-row gap-4 items-center justify-center">
                                    <i className=" font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
                                    <i class="fa-solid fa-taxi  font-bold text-2xl text-gray-500"></i>
                                    <i class="fa-solid fa-hotel font-bold text-2xl text-gray-500" ></i>
                                </div>
                            </div>
                            <div className=" flex flex-row items-center gap-4 justify-center  mt-3 w-full">
                                <div className=" w-[40%] h-12 bg-black cursor-pointer hover:bg-black/80 transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1>
                                </div>
                                <div className=" w-[40%] h-12 bg-[#adb5bd] cursor-pointer hover:bg-[#ced4da] transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-black">View Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" relative bg-black h-[32rem] flex-shrink-0 w-[22rem] xl:w-[25rem]  md:w-[23rem] border-[#F2F2F6] overflow-hidden rounded-3xl flex">
                        <img src="/goa.jpg" className=" h-full w-full object-cover object-top object-center" alt="" />
                        <div className=" bg-white  rounded-3xl absolute flex items-start justify-start flex-col   bottom-0 z-10 h-[13rem]  w-full ">
                            <h1 className=" font-bold text-2xl text-black m-5">Goa Tour Package</h1>
                            <h2 className=" font-semibold text-xl text-gray-500 ml-5">Goa</h2>
                            <div className=" flex flex-row  w-full items-center">
                                <h2 className=" font-bold text-xl text-gray-900 ml-5">Included</h2>
                                <div className=" flex flex-row gap-4 items-center justify-center">
                                    <i className=" font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
                                    <i class="fa-solid fa-taxi  font-bold text-2xl text-gray-500"></i>
                                    <i class="fa-solid fa-hotel font-bold text-2xl text-gray-500" ></i>
                                </div>
                            </div>
                            <div className=" flex flex-row items-center gap-4 justify-center  mt-3 w-full">
                                <div className=" w-[40%] h-12 bg-black cursor-pointer hover:bg-black/80 transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1>
                                </div>
                                <div className=" w-[40%] h-12 bg-[#adb5bd] cursor-pointer hover:bg-[#ced4da] transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-black">View Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" relative bg-black h-[32rem] flex-shrink-0 w-[22rem]  xl:w-[25rem] md:w-[23rem] border-[#F2F2F6] overflow-hidden rounded-3xl flex">
                        <img src="/goa.jpg" className=" h-full w-full object-cover object-top object-center" alt="" />
                        <div className=" bg-white  rounded-3xl absolute flex items-start justify-start flex-col   bottom-0 z-10 h-[13rem]  w-full ">
                            <h1 className=" font-bold text-2xl text-black m-5">Goa Tour Package</h1>
                            <h2 className=" font-semibold text-xl text-gray-500 ml-5">Goa</h2>
                            <div className=" flex flex-row  w-full items-center">
                                <h2 className=" font-bold text-xl text-gray-900 ml-5">Included</h2>
                                <div className=" flex flex-row gap-4 items-center justify-center">
                                    <i className=" font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
                                    <i class="fa-solid fa-taxi  font-bold text-2xl text-gray-500"></i>
                                    <i class="fa-solid fa-hotel font-bold text-2xl text-gray-500" ></i>
                                </div>
                            </div>
                            <div className=" flex flex-row items-center gap-4 justify-center  mt-3 w-full">
                                <div className=" w-[40%] h-12 bg-black cursor-pointer hover:bg-black/80 transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1>
                                </div>
                                <div className=" w-[40%] h-12 bg-[#adb5bd] cursor-pointer hover:bg-[#ced4da] transition-all rounded-xl flex items-center justify-center">
                                    <h1 className=" font-semibold text-[1rem] md:text-xl text-black">View Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" h-20">

                </div>
            </div>

        </section>
    )
}
export default Hero2;