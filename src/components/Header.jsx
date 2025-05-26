import styles from '../styles/Header.module.css'

const Header = ({ name, title }) => (
  <div className={styles.header}>
    <h1>{name}</h1>
    <h2>{title}</h2>
  </div>
)

export default Header
