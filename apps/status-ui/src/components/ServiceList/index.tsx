import React from 'react'
import { Service } from '../../models/service'
import ServiceItem from '../ServiceItem'
import './ServiceList.component.css'

interface Props {
  services: Service[];
}

const ServiceList = ({services}: Props) => {
  return (
    <ul className='ServiceList'>
      {
        services.map(service => (
          <ServiceItem service={service} key={service.id} />
        ))
      }
    </ul>
  )
}

export default ServiceList