const ProjectCard = ({ title, description, url }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </li>
  )
}

export default ProjectCard
