import './style.css'
import Arrow from '../../images/projects/arrow.svg';
import Cards from './Cards/Cards';
import { CardMean } from '../../components/helpers/cardhelpers';

const Projects = () => {
    return ( 
        <section className="projects" id='projects'>
            <div className="projects-title">
                <div className="projects-subtitle-description">
                    <h2>Projects</h2>
                    <p>Как опытный создатель современных, удобных для пользователей веб-дизайнов и цифровых решений, я стремлюсь помочь вам в создании бренда ваших фантазий.</p>
                </div>
                <div className="projects-subtitle-more">
                    <div className="more">
                        <p>More</p>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="projects-cards">
                <div className="cards" key={id}>        
                    {CardMean.slice(0, 4).map(cardProject => <Cards {...cardProject}/>)}
                </div>
            </div>
        </section>
     );
}
 
export default Projects;