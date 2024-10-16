import '../Header/style.css';
import { CardMean } from '../../components/helpers/cardhelpers';

import { NavLink } from 'react-router-dom';
const Header = () => {
    return ( 
        
            <div className="nav-content">
                <nav className="nav">
                    <ul>
                        <NavLink to="/"><li>Главная</li></NavLink>
                        <div className="li-prj">
                            <span className='card-count'>{CardMean.length}</span>    
                            <NavLink to="/myProjects"><li>Проекты</li></NavLink>
                        </div>
                        <NavLink to="/About"><li>Обо мне</li></NavLink>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </div>
     );
}
 
export default Header;