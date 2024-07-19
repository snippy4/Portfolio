import { useState } from 'react'
import Header from '../components/Header'
import ProjectHeader from '../components/ProjectHeader'
import ProjectDisplay from '../components/ProjectDisplay'

//index Projects

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
    <ProjectHeader />
    <ProjectDisplay />
    </div>
  )
}

export default Projects
