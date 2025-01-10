import '../Header/style.css';
import { CardMean } from '../../components/helpers/cardhelpers';
import Burger from '../../images/Header/nav_menu_button.svg';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [DropdownVisible, setDropdownVisible] = useState(false);
    
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setDropdownVisible((prevState) => !prevState);
    };
  
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownVisible(false);
      }
    };
    const handleItemClick = () => {
        setDropdownVisible(false); // Закрыть меню после выбора пункта
      };

    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);    

    return ( 
        
            <div className="nav-content">
                <nav className="nav">
                    <ul>
                        <NavLink to="/Portfolio"><li>Главная</li></NavLink>
                        <div className="li-prj">
                            <span className='card-count'>{CardMean.length}</span>    
                            <NavLink to="/myProjects"><li>Проекты</li></NavLink>
                        </div>
                        <NavLink to="/AboutPage"><li>Обо мне</li></NavLink>
                        <NavLink to="/About"><li>Контакты</li></NavLink>
                    </ul>
                </nav>
                <div className="dropdown-menu" ref={dropdownRef}>
                    <div className="menu_button" onClick={toggleDropdown}> 
                        <img src={Burger} alt="" />
                    </div>
                    {DropdownVisible && (
                    <div id='myDropdown' className="dropdown-content">
                    <NavLink to="/Portfolio"><li onClick={handleItemClick}>Главная</li></NavLink>
                            <div className="li-prj">
                                <span className='card-count'>{CardMean.length}</span>    
                                <NavLink to="/myProjects"><li onClick={handleItemClick}>Проекты</li></NavLink>
                            </div>
                            <NavLink><li onClick={handleItemClick}>Обо мне</li></NavLink>
                            <NavLink to="/About"><li onClick={handleItemClick}>Контакты</li></NavLink>
                    </div>
                    )}
                    </div>
            </div>
     );
}
 
export default Header;