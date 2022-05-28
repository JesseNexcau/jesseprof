import './components.css';
import { Link } from 'react-router-dom';

function Header(){
      return(
            <div className="component-header">
                  <div className='header-links'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/partners">Partners</Link>
                        <Link className='link' to="/rules">Rules</Link>
                  </div>
            </div>
      );
}


export default Header;