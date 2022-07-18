import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css'
function Navbar(){
    return(
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Marycorreia12">
                        <div className='dsmovie-contact-container'>
                        <GithubIcon /><p className='dsmovie-contact-link'>/devSuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Navbar