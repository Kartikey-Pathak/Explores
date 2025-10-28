import { useEffect, useState } from "react";

function Form(){
     const [today,settoday]=useState(0);
     useEffect(()=>{
        settoday(new Date().toISOString().split("T")[0]);

     },[])

     function handle(e){
        e.preventDefault();
     }
     
    return(
        <section className=" w-full  flex items-center justify-center">
            <div className="  h-fit w-full items-center flex flex-col gap-5 bg-[#F2F2F6]">
                <h1 className=" text-3xl m-7 text-black font-bold mt-10">Ask Query</h1>

                <form onSubmit={handle} className=" w-full md:w-[90%] h-full  justify-self-center place-items-center grid md:grid-cols-4 flex-col gap-5">

                    <div className=" w-[80%] md:w-full h-12 flex flex-col justify-center gap-1">
                        <span className=" font-semibold text-gray-400 ml-4"><i className=" text-gray-400 fa-solid fa-user"></i> Full Name</span>
                        <input type="text" placeholder="Enter Name" className=" cursor-pointer hover:border-black transition-all outline-none p-4 font-semibold text-black border-3 border-gray-500 rounded-3xl" />
                    </div>
                    <div className=" w-[80%] md:w-full mt-15 md:mt-0 h-12 flex flex-col justify-center gap-1">
                        <span className=" font-semibold text-gray-400 ml-4"><i class="fa-solid fa-mobile text-gray-400"></i> Phone Number</span>
                        <input type="number" placeholder="Mobile No." className=" hover:border-black transition-all outline-none p-4 font-semibold text-black border-3 border-gray-500 rounded-3xl" />
                    </div>
                      <div className=" w-[80%] md:w-full mt-15 md:mt-0 h-12 flex flex-col justify-center gap-1">
                        <span className=" font-semibold text-gray-400 ml-4"><i className=" text-gray-400 fa-solid fa-envelope"></i> Email ID</span>
                        <input type="email" placeholder="Email" className=" outline-none p-4 font-semibold text-black border-3 hover:border-black transition-all border-gray-500 rounded-3xl" />
                    </div>
                      <div className=" w-[80%] md:w-full mt-15 md:mt-0 h-12 flex flex-col justify-center gap-1">
                        <span className=" font-semibold text-gray-400 ml-4"><i className=" text-gray-400 fa-solid fa-calendar-days"></i> Tour Date</span>
                        <input type="date"   min={today} onClick={(e) => e.target.showPicker()} placeholder="Select Date" className=" outline-none p-4 font-semibold text-black border-3 hover:border-black transition-all border-gray-500 rounded-3xl" />
                    </div>
                        <div className=" w-[80%] md:w-full mt-15 md:mt-0 h-12 flex flex-col justify-center gap-1">
                        <span className=" font-semibold text-gray-400 ml-4"><i className=" text-gray-400 fa-solid fa-calendar-days"></i>Guests</span>
                    <select name="people"  className=" hover:border-black transition-all outline-none p-4 font-semibold text-black border-3 border-gray-500 rounded-3xl" id="">
                        <option value="1" selected>01</option>
                        <option value="2" >02</option>
                        <option value="3" >03</option>
                        <option value="4" >04</option>
                        <option value="5" >05</option>
                        <option value="6" >06</option>
                        <option value="7" >07</option>
                        <option value="8" >08</option>
                        <option value="9" >09</option>
                        <option value="10" >10</option>
                        <option value="10+" >10+</option>
                    </select>
                    </div>

                    <div className=" h-20 mt-5 w-full flex items-center justify-center">
                        <button type="submit" className=" cursor-pointer hover:bg-black/80 transition-all h-15 md:w-[90%] w-[70%] bg-black text-center rounded-4xl">Submit</button>
                    </div>
                    
                </form>
                <div className=" h-12">

                </div>

            </div>
        </section>
    )
}
export default  Form;