import { useState } from 'react'
import Header from '../components/Header'

//index Home

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-950">
    <Header />
    </div>
  )
}

export default Home
