import '../CV/style.css';
import Linkedin from '../../images/footer/linkedin.svg';
import Behance from '../../images/footer/behance.svg';
import Git from '../../images/cards/git.svg';
import CVdoc from '../../../src/CV.pdf'
const CallingCard = () => {
    return ( 
        <section className="cv">
            <div className="cv-card">
                <h2>Каламкаров Алексей(Alexey Kalamkarov)</h2>
                <b>Frontend developer</b>
                <a href={CVdoc}><button className="cv-button">Резюме/CV</button></a>
                <div className="cv-icon">
                    <a href='https://github.com/AlexeyKalamkarov'><img src={Git} alt="" /></a>
                    <a href='https://www.linkedin.com/in/alekseykalamkarov/'><img src={Linkedin} alt="" /></a>
                    <a href='https://www.behance.net/alexeykalamkarov'><img src={Behance} alt="" /></a>
                </div>
            </div>
        </section>
     );
}
 
export default CallingCard;