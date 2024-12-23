import '../Header/style.css';
import { CardMean } from '../../components/helpers/cardhelpers';
import Burger from '../../images/Header/nav_menu_button.svg';
import React, { useState, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsDropdownVisible((prevState) => !prevState);
    };
  
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    const handleItemClick = () => {
        setIsDropdownVisible(false); // Закрыть меню после выбора пункта
      };

    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);    return ( 
        
            <div className="nav-content">
                <nav className="nav">
                    <ul>
                        <NavLink onClick={handleItemClick} to="/Portfolio"><li onClick={handleItemClick}>Главная</li></NavLink>
                        <div className="li-prj">
                            <span className='card-count'>{CardMean.length}</span>    
                            <NavLink onClick={handleItemClick} to="/myProjects"><li onClick={handleItemClick}>Проекты</li></NavLink>
                        </div>
                        <NavLink><li onClick={handleItemClick}>Обо мне</li></NavLink>
                        <NavLink onClick={handleItemClick} to="/About"><li onClick={handleItemClick}>Контакты</li></NavLink>
                    </ul>
                </nav>
                <div className="dropdown-menu" ref={dropdownRef}>
                    <div className="menu_button" onClick={toggleDropdown}> 
                        <img src={Burger} alt="" />
                    </div>
                    {isDropdownVisible && (
                    <div id='myDropdown' className="dropdown-content">
                    <NavLink to="/Portfolio"><li>Главная</li></NavLink>
                            <div className="li-prj">
                                <span className='card-count'>{CardMean.length}</span>    
                                <NavLink to="/myProjects"><li>Проекты</li></NavLink>
                            </div>
                            <NavLink><li>Обо мне</li></NavLink>
                            <NavLink to="/About"><li>Контакты</li></NavLink>
                    </div>
                    )}
                    </div>
            </div>
     );
}
 
export default Header;