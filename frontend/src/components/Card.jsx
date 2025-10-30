import { Link, useNavigate } from 'react-router-dom';

function Card({city,img}){
    const navigate = useNavigate();
    
    return(
        <div onClick={() => navigate(`/packages/${city.toLowerCase()}`, { state: { city } }) } className=" hover:shadow-xl hover:scale-103 cursor-pointer transition-all relative bg-black flex-shrink-0 h-[32rem] w-[22rem]  md:w-[23rem] xl:w-[25rem] border-[#F2F2F6] overflow-hidden rounded-3xl flex">
                        <img src={img} className=" h-full w-full object-cover object-top object-center" alt="" />
                        <div className=" bg-white  rounded-3xl absolute flex items-start justify-start flex-col   bottom-0 z-10 h-[13rem]  w-full ">
                            <h1 className=" font-bold text-2xl text-black m-5">{`${city} Tour Package`}</h1>
                            <h2 className=" font-semibold text-xl text-gray-500 ml-5">{city}</h2>
                            <div className=" flex flex-row  w-full items-center">
                                <h2 className=" font-bold text-xl text-gray-900 ml-5">Included</h2>
                                <div className=" flex flex-row gap-4 items-center justify-center">
                                    <i className=" font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
                                    <i className="fa-solid fa-taxi  font-bold text-2xl text-gray-500"></i>
                                    <i className="fa-solid fa-hotel font-bold text-2xl text-gray-500" ></i>
                                </div>
                            </div>
                            <div className=" flex flex-row items-center gap-4 justify-center  mt-3 w-full">
                                <div  onClick={(e) => e.stopPropagation()} className=" w-[40%] h-12 bg-black cursor-pointer hover:bg-black/80 transition-all rounded-xl flex items-center justify-center">
                                    <Link state={{ city: city }} to="/enquiry"><h1 className=" font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1></Link>
                                </div>
                                <div className=" w-[40%] h-12 bg-[#adb5bd] cursor-pointer hover:bg-[#ced4da] transition-all rounded-xl flex items-center justify-center">
                                    <Link to={`/packages/${city.toLowerCase()}`} state={{city:city}} ><h1 className=" font-semibold text-[1rem] md:text-xl text-black">View Details</h1></Link>
                                </div> 
                            </div>
                        </div>
                    </div>
    )
}
export default Card;