import { useState } from 'react'
import {Admin} from '@rv/types'
import Header from './components/Layout/Header'
import Breadcrumbs from './components/shared/Breadcrumbs'
import Board from './screens/Enterprise/Kanban/Board'
import Kanban from './screens/Enterprise/Kanban'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Boards from './screens/Main/Boards'
import CreatePostSoftware from './screens/Software/Blog/CreatePostSoftware'
import { PublicRoutes } from './constants-definitions/Routes'
import Private from './screens/Private'

const Application = () => {
  const [count, setCount] = useState(0)

  
  // const [user, setUser]= useState<Admin>({
  //   name: 'Carlos Soprano',
  //   position: 'position',
  //   age: 25})

  return (
    <BrowserRouter>
    <Routes>
      <Route  path={PublicRoutes.LOGIN} element={<Boards />} />
      <Route  path='/create-post-software' element={<CreatePostSoftware />} />
      <Route path='/*' element={<Private />} />
      </Routes>

      
    </BrowserRouter>
  )
}

export default Application
