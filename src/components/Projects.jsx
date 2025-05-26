import styles from '../styles/Projects.module.css'

const Projects = () => {
  const projects = [
    {
      title: 'Student Result Management System',
      description: 'An online resukt management system for students and admin for accessing the online results and CRUD functionality for Student Data.',
      url: 'https://github.com/sameerkeshvani/student_result_management_system'
    },
    {
      title: 'Blood Bank Management System',
      description: 'An online website to see the blooad availaibility for patients and entering the blood samples data',
      url: 'https://github.com/sameerkeshvani/blood_bank_management_system'
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app with CRUD functionality and real-time notifications built using React and Firebase.',
      url: 'https://github.com/janedoe/task-manager'
    },
  ]

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <ul>
        {projects.map(({title, description, url}, i) => (
          <li key={i} className={styles.projectItem}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
