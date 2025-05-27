import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Student Result Management System',
      description: 'An online result management system for students and admin for accessing the online results and CRUD functionality for Student Data.',
      url: 'https://github.com/sameerkeshvani/student_result_management_system'
    },
    {
      title: 'Blood Bank Management System',
      description: 'An online website to see the blood availability for patients and entering the blood samples data',
      url: 'https://github.com/sameerkeshvani/blood_bank_management_system'
    },
  ]

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <ul className={styles.projectList}>
        {projects.length === 0 ? (
          <p>No projects to show.</p>
        ) : (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))
        )}
      </ul>
    </section>
  )
}

export default Projects
