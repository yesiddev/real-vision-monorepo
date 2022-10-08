import React from 'react'
import Header from '../../components/Header'
import StatusMessage from '../../components/StatusMessage'
import ServiceList from '../../components/ServiceList'
import useGetServices from '../../hooks/useGetServices'

const Main = () => {
  const services = useGetServices()

  return (
    <>
      <Header />
      <main>
        <div className='main-container'>
          <h1 className='title'>Services Status</h1>
          <StatusMessage services={services}/>
          <ServiceList services={services} />
        </div>
      </main>
    </>
  )
}

export default Main
