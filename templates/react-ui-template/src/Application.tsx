import { useState } from 'react'
import {Admin} from '@rv/types/dist/models/index'

const Application = () => {
  const [count, setCount] = useState(0)

  
  const [user, setUser]= useState<Admin>({
    name: 'Carlos Soprano',
    title: 'position',
    position: 'position',
    age: 25})

  return (
    <div className="App">
      <h1>Real Vision Administrator {user.name}</h1>     
    </div>
  )
}

export default Application
