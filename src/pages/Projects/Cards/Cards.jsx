import { CardMean } from '../../../components/helpers/cardhelpers';
import './style.css';
const Cards = ({id, img, title, subtitle}) => {
    return ( 

        <div className="project-card" key = {id}>
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <div className="card-description">
                <b>{title}</b>
                <p>{subtitle}</p>
            </div>
        </div>
    
     );
}
 
export default Cards;