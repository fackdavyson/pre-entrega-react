import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  const imglogo = "https://cdn.pixabay.com/photo/2013/07/13/10/43/blue-157652_1280.png"
  return (
    <header>
        
        <h1><img className= 'imgLogo' src={imglogo} alt="" />Bluebubble</h1>

        <nav>
            <ul>
                <li>PC Armadas</li>
                <li>Componentes</li>
                <li>FAQ</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar