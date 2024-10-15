import Banner from "../pages/Banner/Banner";
import Header from "../components/Header/Header";
import Projects from "../pages/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Project from "./Project/Project";

const MyProjects = () => {
    
    return ( 
        <div className="container">
            {/* <Banner/> */}
            {/* <Projects/> */}
            <Project/>
        </div>
     );
}
 
export default MyProjects;