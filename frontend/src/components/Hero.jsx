import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import Card from './Card';


gsap.registerPlugin(ScrollTrigger)

function Hero() {
    const ref = useRef(null);
    const txt = useRef(null);

    useGSAP(() => {
        const fadeIn = gsap.to(ref.current, {
            opacity: 1,
            delay: 0.1,
            duration: 0.5,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 50%",
                end: "top 60%",
            },
        });

        // Slide-in animation for heading
        const textSlide = gsap.fromTo(
            txt.current,
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
                    trigger: txt.current,
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
        <section className=" flex items-center justify-center mt-15 flex-col bg-[#F2F2F6]">
            <h1 ref={txt} className=" text-3xl md:text-4xl text-black font-bold">Domestic Packages</h1>
            <div ref={ref} className=" opacity-0 flex items-center justify-center w-full">

                <div className=" w-full md:w-[90%] flex items-center justify-center place-items-center  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10  mt-15 ">

                    <Card city={"Goa"} days={"5 Days 4 Nights"}  img={"/goa.jpg"} />
                    <Card city={"Kerala"} img={"/kerala.webp"} />
                    <Card city={"Varanasi"} img={"/vns.webp"} />
                </div>
                <div className=" h-20">

                </div>
            </div>

        </section>
    )
}
export default Hero;