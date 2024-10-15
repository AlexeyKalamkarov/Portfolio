import Instagram from '../../images/footer/instagramm.svg';
import Facebook from '../../images/footer/facebook.svg';
import Linkedin from '../../images/footer/linkedin.svg';
import Vk from '../../images/footer/vk.svg';
import Telegramm from '../../images/footer/telegramm.svg';
import './style.css';




const Footer = () => (
    <section className="footer">
        <h3>social</h3>
        <div className="footer-social">
            <div className="social-icon">
                <a href='/#'><img src={Instagram} alt="" /></a>
            </div>
            <div className="social-icon">
                <a><img src={Facebook} alt="" /></a>
            </div>
            <div className="social-icon">
                <a><img src={Linkedin} alt="" /></a>
            </div>
            <div className="social-icon">
                <a><img src={Vk} alt="" /></a>
            </div>
            <div className="social-icon">
                <a><img src={Telegramm} alt="" /></a>
            </div>
        </div>
        <div className=""></div>
        <p>AlexeyKalamkarov - frontend developer 2025</p>
    </section>
)
 
export default Footer;