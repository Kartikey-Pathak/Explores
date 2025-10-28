
import Form from "../components/Form";
import Hero from "../components/Hero";
import Img from "../components/Img";
import Nav from "../components/Nav";

function Home(){
    return(
        <section className=" w-full">
            <Nav/>
            <Img/>
            <Form/>
            <Hero/>
            
            
        </section>
    )
}
export default Home;