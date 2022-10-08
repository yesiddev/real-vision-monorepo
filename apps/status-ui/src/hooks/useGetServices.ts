import {useState, useEffect} from 'react'
import { Service } from '../models/service'
import allServices from '../data/services.json' assert {type: 'json'}

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

    async function hola() {
      const data = await fetch('https://real-vision-api.herokuapp.com');
      console.log(data);
    }

    getStatus()
    hola()
  }, [])
  return services;
}

export default useGetServices