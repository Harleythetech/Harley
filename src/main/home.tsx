import Hero from "./Components/hero";
import About from  "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


function Home(){
    return(
        <div className="w-full text-white">
            {/* Hero section */}
            <Hero/>

            {/*About Section*/}
            <About/>

            {/* Projects Section */}    
            <Projects/>
            
            {/* Contact Section */}
            <Contact/>
        </div>
    );
}

export default Home;