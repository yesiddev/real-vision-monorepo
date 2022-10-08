import React from 'react'
import { Service } from '../../models/service'
import './ServiceItem.component.css'

interface Props {
  service: Service;
}

const ServiceItem = ({service}: Props) => {
  return (
    <li className='ServiceItem'>
      <p className='ServiceItem__name'>
        {service.name}
      </p>
      <p className='status'>
        {service.status} 
        <span className={`status__icon status__icon--${service.status}`}></span>
      </p>
    </li>
  )
}

export default ServiceItem