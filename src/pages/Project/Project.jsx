import '../Projects/style.css';
import Arrow from '../../images/projects/arrow.svg';
import Cards from '../Projects/Cards/Cards';
import { CardMean } from '../../components/helpers/cardhelpers';



const  Project= () => {
    return ( 
            <section className="projects" key={CardMean.toString()}>
                <div className="project-title">
                    <div className="project-subtitle-description">
                        <h2>Мои проекты</h2>
                    </div>
                </div>
                <div className="projects-cards">
                    <div className="cards">        
                        {CardMean.map(cardProject => <Cards {...cardProject}/>)}
                    </div>
                </div>
            </section>
     );
}
 
export default Project;