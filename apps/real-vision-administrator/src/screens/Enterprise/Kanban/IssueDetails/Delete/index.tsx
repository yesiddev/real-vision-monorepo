import ConfirmModal from '@/components/shared/ConfirmModal'
import React, { useState } from 'react'
import styles from './Delete.module.css'

const Delete = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button className={styles.button}>
      <ConfirmModal
      isOpen={false} 
      setIsOpen={() => setIsOpen(false)} 
        title='Are you sure you want to delete this issue?' 
        message='Once you delete, it;s gone for good' 
        confirmText='Delete issue' 
        cancelText='Cancel'   
        />
        <i className='bx bx-trash' ></i>
    </button>
  )
}

export default Delete
