import { useEffect, useState } from "react";
const bn1 = "https://res.cloudinary.com/demon35hl/image/upload/v1761841519/Black_and_White_Modern_Travel_To_India_Presentation_1_fh7w5p.png";
const bn2 = "https://res.cloudinary.com/demon35hl/image/upload/v1761841745/bn3_w6ydc4.png"
const bn3 = "https://res.cloudinary.com/demon35hl/image/upload/v1761841834/bn2_ra1jpd.jpg"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
function Img() {
    const img = useRef(null);
    const text = useRef(null);

    const images = [bn1, bn2, bn3];
    let [index, setIndex] = useState(0);



    useEffect(() => {
        gsap.fromTo(
            img.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
        );
        gsap.fromTo(text.current, {
            opacity: 0,
            x:300,

        }, {
            opacity: 1,
            x: 0,
            duration: 1.4,
            delay: 0.3,
            ease: "power2.inOut"
        })

    }, [index]);

    return (
        <section className="w-full mt-15 h-[50vh] lg:h-[82vh] overflow-hidden flex items-center justify-center">
            <div className="flex items-center justify-center relative h-full w-full">

                <div
                    ref={text}
                    className="absolute inset-0   flex flex-col justify-center md:justify-start md:pl-20 pl-10 top-5 md:top-40 z-20"
                >
                    <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg">
                        Welcome To
                    </h1>
                    <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg mt-3">
                        Travel Explores
                    </h1>
                </div>


                <div onClick={() => {
                    if (index === images.length - 1) {
                        setIndex(0);
                        return;
                    }
                    setIndex(index + 1);

                }} className=" hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 z-30 right-10 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90">
                    <i className=" text-gray-600/90 text-[0.8rem] md:text-xl font-semibold  fa-solid fa-arrow-right"></i>
                </div>
                <div onClick={() => {
                    if (index === 0) {
                        setIndex(images.length - 1);
                        return;
                    }
                    setIndex(index - 1);
                }} className=" hover:bg-gray-400 transition-all cursor-pointer bottom-10 absolute z-30 left-10 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90">
                    <i className=" text-gray-600/90 text-[0.8rem] md:text-xl font-semibold  fa-solid fa-arrow-left"></i>
                </div>
                <img
                    ref={img}
                    src={images[index]}
                    alt="banner"
                    className="w-full h-full   object-cover "
                />
            </div>
        </section>
    );
}

export default Img;
