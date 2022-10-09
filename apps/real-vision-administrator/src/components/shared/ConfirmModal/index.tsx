import React, {useState} from 'react'
import Button from '../Button';
import Modal from '../Modal';
import styles from './ConfirmModal.module.css'

interface Props {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    renderLink?: Function;
    isOpen: boolean;
    setIsOpen: Function;
}

const ConfirmModal = ({title, isOpen, setIsOpen, message, confirmText, cancelText, renderLink}: Props) => {

  return (
    <div>
        <Modal 
        isOpen={isOpen}
        setIsOpen={() =>{}}
            renderContent={(modal:any) =>(
                <div className={styles.confirm_modal}>
                    <h3 className={styles.title}>{title}</h3>
                    {message && <p className={styles.message}>{message}</p>}
                    <div className={styles.actions}>
                        {confirmText && <Button className='primary'>{confirmText}</Button> }
                        {cancelText && <Button onClick={() => setIsOpen(false)}>{cancelText}</Button> }
                    </div>
                </div>
            )}
        />
    </div>
  )
}

export default ConfirmModal
