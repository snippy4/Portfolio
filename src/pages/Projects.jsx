import { useState } from 'react'
import Header from '../components/Header'
import ProjectHeader from '../components/ProjectHeader'

//index Projects

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-950">
    <ProjectHeader />
    </div>
  )
}

export default Projects
