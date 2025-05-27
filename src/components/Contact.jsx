import styles from '../Styles/Contact.module.css'

const Contact = () => (
  <section className={styles.contact}>
    <h2>Contact Me</h2>
    <p>If you want to get in touch, feel free to reach out!</p>
    <ul>
      <li>Email: <a href="mailto:sameeekeshvani@gmail.com">sameeekeshvani@gmail.com</a></li>
      <li>Phone: +1 (437) 979-6526</li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/sameer-keshvani-560071199/" target="_blank" rel="noopener noreferrer">Sameer Keshvani</a></li>
      <li>GitHub: <a href="https://github.com/sameerkeshvani" target="_blank" rel="noopener noreferrer">Sameer Keshvani</a></li>
    </ul>
  </section>
)

export default Contact
