import '../src/main.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import MyProjects from './pages/myProjects';
import Contacts from './pages/Contacts';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
    <div className="App">
        <Router>
            <Header/>
          <ScrollToTop/>
                <Routes>
                    <Route path='/Portfolio' element={<Home/>}/>
                    <Route path='/myProjects' element={<MyProjects/>}/>
                    <Route path='/About' element={<Contacts/>}/>
                    <Route path='/AboutPage' element={<AboutPage/>}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
