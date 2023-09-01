import '../styles/Banner.css'
import '../styles/Titre.css'
import '../styles/gallery.css'
import LOGO from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

const Banner = () => {
    return <div className='banner'>
        <header>
            <nav>
            <img src={LOGO} alt='LOGO' className='LOGO'/>
                <ul>
                    <NavLink to="/" >
                    <li><a href='/' className='titre'>Accueil</a></li>
                        </NavLink>

                        <NavLink to="/Apropos" >
                            <li><a href='Apropos.js' className='titre'>A Propos</a></li>
                        </NavLink>
                    
                </ul>
            </nav>
        </header>
    
     
    
    
    </div> 
}
export default Banner 