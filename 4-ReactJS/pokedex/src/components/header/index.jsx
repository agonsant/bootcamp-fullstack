import POKEMON_IMG from "./img/Pokémon_Gotta_catch_em_all_logo.png";
import "./style.css";

function Header() {
  return (
    <header className='header__container'>
      <img className='header__img' alt='Logo de pokemon' src={POKEMON_IMG}></img>
    </header>
  );
}

export default Header;
