import '../CV/style.css';
import Linkedin from '../../images/footer/linkedin.svg';
import Behance from '../../images/footer/behance.svg';
import Git from '../../images/cards/git.svg';

const CallingCard = () => {
    return ( 
        <section className="cv">
            <div className="cv-card">
                <h2>Каламкаров Алексей</h2>
                <b>Frontend developer</b>
                <button className="cv-button">Резюме</button>
                <div className="cv-icon">
                    <img src={Git} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Behance} alt="" />
                </div>
            </div>
        </section>
     );
}
 
export default CallingCard;