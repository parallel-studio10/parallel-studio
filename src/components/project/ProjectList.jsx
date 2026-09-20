import { TextLink, Tag } from '../ui/index.jsx'

export default function ProjectList({ projects }) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.slug}>
          <TextLink to={`/work/${project.slug}`} arrow>{project.title}</TextLink>
          <Tag>{project.category}</Tag>
        </li>
      ))}
    </ul>
  )
}
