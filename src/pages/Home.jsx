import { useState } from 'react'
import Header from '../components/Header'
import Display from '../components/Display'

//index Home

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
    <Header />
    <Display />
    </div>
  )
}

export default Home
