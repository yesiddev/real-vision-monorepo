import React, { useEffect, useState } from 'react'
import { Service } from '../../models/service'
import { Status } from '../../models/Status'
import './StatusMessage.content.css'

interface Props {
  services: Service[];
}

const StatusMessage = ({services}: Props) => {
  const [errors, setErrors] = useState<Service[]>([]);

  useEffect(() => {
    setErrors(services.filter(item => item.status === Status.ERROR))
  }, [])

  if (errors.length === 0) {
    return (
      <div className='StatusMessage StatusMessage--OK'>
        <p className='StatusMessage__text'>All Services OK</p>
      </div>
    )
  } else {
    return (
      <div className={`StatusMessage StatusMessage--${errors[0].status}`}>
        <p className='StatusMessage__text'>
          {errors.length} service ERROR{errors.length > 1 && 'S'}
        </p>
      </div>
    )
  }

}

export default StatusMessage