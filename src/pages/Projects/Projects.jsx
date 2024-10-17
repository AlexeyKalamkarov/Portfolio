import './style.css'
import Arrow from '../../images/projects/arrow.svg';
import Cards from './Cards/Cards';
import { CardMean } from '../../components/helpers/cardhelpers';
import { NavLink } from 'react-router-dom';


const Projects = () => {
    return ( 
        <section className="projects" id='projects'>
            <div className="projects-title">
                <div className="projects-subtitle-description">
                    <h2>Мои проекты</h2>
                    <p>Как опытный создатель современных, удобных для пользователей веб-дизайнов и цифровых решений, я стремлюсь помочь вам в создании бренда ваших фантазий.</p>
                </div>
                <div className="projects-subtitle-more">
                    <div className="more">
                        <NavLink to='/myProjects'><p>Подробнее</p></NavLink>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="projects-cards">
                <div className="cards" >        
                    {CardMean.slice(0, 4).map((cardProject, index) => <Cards key={index} {...cardProject}/>)}
                </div>
            </div>
        </section>
     );
}
 
export default Projects;