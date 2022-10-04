import Layout from '@/components/Layout'
import { PrivateRoutes } from '@/constants-definitions/Routes'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Kanban from '../Enterprise/Kanban'

const Private = () => {
  return (
    <Layout>
        <Routes>
            <Route path={PrivateRoutes.KANBAN} element={<Kanban />} />
        </Routes>
    </Layout>
  )
}

export default Private
