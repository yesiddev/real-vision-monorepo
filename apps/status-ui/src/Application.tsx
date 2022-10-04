import { useState } from 'react'
import {persistLocalStorage} from '@rv/utilities'
const Application = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <h1>STATUS UI</h1>     
    </div>
  )
}

export default Application
