import { useParams } from "react-router-dom";
import packages from "../data/packages";
import Last from "../components/Last";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ScrollTop from "../components/ScrollTop";
import PolicyAccordion from "../components/PolicyAccordion";

function Info() {
  const { city } = useParams();
  const data = packages[city.toLowerCase()];

  if (!data) {
    return <p className="text-center text-red-500 mt-10">Package not found.</p>;
  }

  return (<>
  <Nav/>
  <ScrollTop/>
    <div className="min-h-screen bg-[#F8F9FA] pt-6 md:pt-12 w-full">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 mt-5">
        <img src={data.img} alt={data.city} className="rounded-2xl w-full h-80 object-cover mb-6" />
        <h1 className="text-3xl text-black font-bold mb-2">{data.city} Tour Package</h1>
        <h2 className="text-lg text-gray-600 mb-6">{data.days}</h2>
        <p className="text-gray-700 mb-8">{data.des}</p>

        <h3 className="text-2xl font-semibold mb-6 text-black">Detailed Itinerary</h3>

        <div className="relative border-l-4 border-gray-300 ml-4">
          {data.timeline.map((item) => (
            <div key={item.day} className="mb-10 ml-6 relative">
              {/* Circle for day number */}
              <div className="absolute -left-10 flex items-center justify-center w-8 h-8 bg-green-600 text-white font-bold rounded-full">
                {item.day}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Day {item.day}: {item.title}
              </h4>

              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
        <PolicyAccordion />

      <Last/>
  
        <Footer/>
   
    </div>
    </>
  );
}

export default Info;
