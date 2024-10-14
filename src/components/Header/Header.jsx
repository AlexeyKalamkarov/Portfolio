import '../Header/style.css'
const Header = () => {
    return ( 
        
            <div className="nav-content">
                <nav className="nav">
                    <ul>
                        <li>Home</li>
                        <div className="li-prj">
                            <span>20</span>    
                            <li>Projects</li>
                        </div>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
     );
}
 
export default Header;