import Layout from '@/components/Layout'
import { PrivateRoutes } from '@/constants-definitions/Routes'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Kanban from '../Enterprise/Kanban'
import Products from '../Hardware/Products'
import SoftwarePosts from '../Software/Blog/ListPosts'

const Private = () => {
  return (
    <Layout>
        <Routes>
            <Route path={PrivateRoutes.KANBAN} element={<Kanban />} />
            <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
            <Route path={PrivateRoutes.SOFTWAREPOSTS} element={<SoftwarePosts />} />
            <Route  path='/kanban/issues/:issueId' element={<Kanban />} />
        </Routes>
    </Layout>
  )
}

export default Private
