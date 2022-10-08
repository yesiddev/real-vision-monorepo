import {useState, useEffect} from 'react'
import { Service } from '../models/service'
import {services as allServices} from '../data/services'

const useGetServices = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function getStatus() {
      const completedServices = [];

      for (const element of allServices) {
        const data = await fetch(element.url)

        await completedServices.push({
          name: element.name,
          url: element.url,
          id: element.id,
          status: data.statusText
        });
      }
      setServices(completedServices)
    }

    getStatus()
  }, [])
  return services;
}

export default useGetServices