import './Pokedex.css';
import Pokecard from './Pokecard';
import defaultProps from './defaultProps';

function Pokedex() {
    return <>
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards columns is-multiline is-mobile is-justify-content-space-evenly">
                {defaultProps.map((e, i) => {
                    const { id, name, type, base_experience } = e;
                    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                    return <Pokecard key={i} image={image} name={name} type={type} base_experience={base_experience} />
                })}
            </div>
        </div>
    </>
}

export default Pokedex;
