import { Link } from 'react-router-dom'
import styles from '../Styles/Navbar.module.css'
import myphoto from '../assets/myphoto.jpg'

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <img src={myphoto} alt="Logo" className={styles.logoImg} />
      <span className={styles.logoText}>Sameer Keshvani</span>
    </div>
    <ul className={styles.navList} >
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
)

export default Navbar
