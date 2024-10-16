import Banner from "../pages/Banner/Banner";
import Header from "../components/Header/Header";
import Projects from "../pages/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Project from "./Project/Project";


const Home = () => {
    
    return ( 
        <div className="container">
            <Banner/>
            <Projects/>
        </div>
     );
}
 
export default Home;
// export default menuScroll;