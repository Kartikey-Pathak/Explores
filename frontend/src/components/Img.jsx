import { useEffect, useState } from "react";
import bn1 from "../assets/bn1.png";
import bn2 from "../assets/bn2.png";
import bn3 from "../assets/bn3.png";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
function Img() {
    const img = useRef(null);

    const images = [bn1, bn2, bn3];
    let [index, setIndex] = useState(0);



    useEffect(() => {
        gsap.fromTo(
            img.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
        );
    }, [index]);

    return (
        <section className="w-full mt-15 h-fit lg:h-[82vh] overflow-hidden flex items-center justify-center">
            <div className="flex items-center justify-center relative h-full w-full">


                <div onClick={() => {
                    if (index === images.length - 1) {
                        setIndex(0);
                        return;
                    }
                    setIndex(index + 1);

                }} className=" hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 z-10 right-10 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90">
                    <i className=" text-black text-[0.8rem] md:text-xl font-semibold  fa-solid fa-arrow-right"></i>
                </div>
                <div onClick={() => {
                    if (index === 0) {
                        setIndex(images.length - 1);
                        return;
                    }
                    setIndex(index - 1);
                }} className=" hover:bg-gray-400 transition-all cursor-pointer bottom-10 absolute z-10 left-10 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90">
                    <i className=" text-black text-[0.8rem] md:text-xl font-semibold  fa-solid fa-arrow-left"></i>
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
