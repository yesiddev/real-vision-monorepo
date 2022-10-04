import ConfirmModal from '@/components/shared/ConfirmModal'
import React from 'react'
import styles from './Delete.module.css'

const Delete = () => {
  return (
    <button className={styles.button}>
      <ConfirmModal 
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
