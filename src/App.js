import '../src/main.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
