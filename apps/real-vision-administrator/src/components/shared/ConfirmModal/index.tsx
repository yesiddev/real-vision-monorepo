import React, {useState} from 'react'
import Button from '../Button';
import Modal from '../Modal';
import styles from './ConfirmModal.module.css'

interface Props {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    renderLink?: Function;
}

const ConfirmModal = ({title, message, confirmText, cancelText, renderLink}: Props) => {

    const [isOpen, setIsOpen] = useState(false)
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
                        <Button className='primary'>{confirmText}</Button>
                        <Button onClick={() => setIsOpen(false)}>{cancelText}</Button>
                    </div>
                </div>
            )}
        />
    </div>
  )
}

export default ConfirmModal
