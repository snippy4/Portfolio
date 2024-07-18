import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'

//index app

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-950">
    <Header />
    </div>
  )
}

export default App
