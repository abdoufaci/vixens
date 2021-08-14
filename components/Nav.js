import Image from 'next/image'
import logo from '../public/logo.png'


const Nav = () => {
    return(
        <nav>
            <div className="logo">
                <Image 
                src={logo}
                width={60}
                height={60}
            />
            <h3>Vixens Team</h3>
            </div>
            <div className="nav-link">
                <ul className="nav-links">
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact Us</li>
                    <li>Shop</li>
                </ul>
            </div>
            <h3 id='vixens'>#Glory4Vixens</h3>
        </nav>
    )
}

export default Nav;