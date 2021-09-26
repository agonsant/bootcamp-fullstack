import { Link } from "react-router-dom";
import './style.css'

function Header({children}) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className='nav-link' to="/my-first-page">Vamonos a nuestra página uno</Link>
          </li>
          <li>
            <Link to="/my-second-page">Vamonos a nuestra página dos</Link>
            {children}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
