import './style.css';


/**
 * props: object
 *  - pokemon: object
 *      - id: string
 *      - img: string
 *      - name: string
 *      - types: string[]
 */
function PokemonListCard(props){

    return (
        <div className='pokemon-card__container'>
            <p className='pokemon-card__text pokemon-card__text-id'>{props.pokemon?.id}</p>
            <img alt={`Pokemon ${props.pokemon?.name}`} className='pokemon-card__img' src={props.pokemon?.sprites.front_default}></img>
            <h3>{props.pokemon?.name}</h3>
            <p className='pokemon-card__text pokemon-card__text-type'>{props.pokemon?.types.map(e => e.type.name).join(', ')}</p>
        </div>
    )

}


export default PokemonListCard;