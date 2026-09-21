import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects.js'
import NotFound from './NotFound.jsx'
import ProjectDetail from './ProjectDetail.jsx'

export default function Project() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  return project ? <ProjectDetail project={project} /> : <NotFound />
}
