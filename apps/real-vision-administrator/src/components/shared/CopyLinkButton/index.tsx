import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import styles from './CopyLink.module.css'

const CopyLinkButton = () => {
    const [isLinkCopied, setLinkCopied] = useState(false);


    const handleLinkCopy = async() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 1000);
        if('clipboard' in navigator){
            return await navigator.clipboard.writeText(window.location.href);
        }
    }
    return (
    <button className={styles.button} onClick={handleLinkCopy}>
      <i className='bx bx-link'></i> {isLinkCopied? 'Link Copied': "Copy link"}
    </button>
  )
}

export default CopyLinkButton
