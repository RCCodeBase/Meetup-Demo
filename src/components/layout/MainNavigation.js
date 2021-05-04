// import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import  FavoriteContext from '../../store/favourites-context'
import { useContext } from 'react';
import { Link} from 'react-router-dom';

function MainNavigation(){

    const favctrx = useContext(FavoriteContext);
return(
    <header>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Meetup App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
    <Link  className="nav-link" to="/">All Meetups</Link>
    <Link  className="nav-link" to="/NewMeetup">Add New Meetups</Link>
    <Link className="nav-link" to="/Fav">Favourites<span>{favctrx.totalFav}</span></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        {/* <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/NewMeetup'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/Fav'>Favourites</Link>
                </li>
            </ul>
        </nav> */}
    </header>
);
}

export default MainNavigation;