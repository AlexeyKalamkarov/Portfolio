import { CardMean } from '../../../components/helpers/cardhelpers';
import './style.css';
const Cards = () => {
    const CardItem = CardMean.map(cardProject =>
        <div className="project-card" key = {CardMean.id}>
            <div className="card-image">
                <img src={cardProject.img} alt="" />
            </div>
            <div className="card-description">
                <b>{cardProject.title}</b>
                <p>{cardProject.subtitle}</p>
            </div>
        </div>
    )
    return ( 
        <div className="cards">
            {CardItem}
        </div>
     );
}
 
export default Cards;