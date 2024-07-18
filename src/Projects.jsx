import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Header_Projects from './components/Header_Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-950">
    <Header_Projects />
    </div>
  )
}

export default App
