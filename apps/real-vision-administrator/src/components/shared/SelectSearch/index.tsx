import React, { useState } from 'react'
import styles from './Select.module.css'

type Option = {
  title: string,
  value: string
}

interface Props {
  options?: Option[]; 
  value?: any
  setValue?: any;
}

const SelectSearch = ({options, value, setValue}:Props) => {

  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const addItem = (item_name: string, item: string) => {
    const element = {name: item_name, item} 
    const exist = value.filter((v:any) => v.name == item_name);
    if(exist.length <= 0){
      setValue([...value, element ])
    }
  }

  const removeItem = (item: string) => { 
    const exist = value.filter((v:any) => v.item != item);
    setValue(exist)
  }

  return (
    <div className={styles.select_element}>
      <span className={styles.input} onClick={() => setOpen(!open)}>
        {value?.map((item:any) => (
          <div>{item.name.substring(0, item.name.indexOf(" "))} <button onClick={() => removeItem(item.item)}><i className='bx bx-x'></i></button></div>
        ))}
      </span>
      <div className={`${styles.select} ${open && styles.select_active} `} id="" >
        <input type="search" onChange={(e) => setSearch(e.target.value)} name="" id="" placeholder='Search' /> 
        <div>
        {options?.filter((option) => option.title.toLowerCase().includes(search.toLowerCase())).map(({title, value}: any) => (
          <input readOnly onClick={() => addItem(title, value)} className={styles.options} value={title} />
        ))}
        </div>

      </div>
    </div>
  )
}

export default SelectSearch
