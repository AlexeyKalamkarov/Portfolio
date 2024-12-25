import { CardMean } from '../../../components/helpers/cardhelpers';
import './style.css';
const Cards = ({id, img, title, subtitle, icon, path}) => {
    return ( 

        <div className="project-card" key = {id}>
            <div className="card-image">
                <img src={img} alt="" />
                <div className="overlay">
                <a href={path} className="icon">
                    <img src={icon} alt="" />
                </a>
                </div>
            </div>
            <div className="card-description">
                <b>{title}</b>
                <p>{subtitle}</p>
            </div>
        </div>
    
     );
}
 
export default Cards;