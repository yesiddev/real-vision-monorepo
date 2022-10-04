import React from 'react'
import styles from './ImageInput.module.css'

const ImageInput = () => {
  return (
    <div>
      <div className={styles.formbold_file_input}>
        <input type="file" name="file" id="file" />
        <label htmlFor="file">
            <div>
                <span className={styles.formbold_drop_file} >Drop file here</span>
                <span className={styles.formbold_or} >Or</span>
                <span className={styles.formbold_browse} >Browse</span>
            </div>
        </label>
      </div>
    </div>
  )
}

export default ImageInput
