import styles from '../Styles/Skills.module.css'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'CSS Modules', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'Firebase', level: 'Intermediate' },
  ]

  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        {skills.map(({name, level}, i) => (
          <li key={i}>
            <strong>{name}</strong>: {level}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
