import './Pokecard.css';

function Pokecard(props) {
    return <div className="Pokecard column is-5-mobile is-one-fifth-tablet is-one-fifth-desktop">
        <h3 className="Pokecard-name">{props.name}</h3>
        <img src={props.image} className="Pokecard-img" alt=""></img>
        <span className="Pokecard-type">{props.type}</span>
        <span className="Pokecard-xp">{props.base_experience}</span>
    </div>
}

export default Pokecard;
