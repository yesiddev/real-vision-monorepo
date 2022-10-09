import React from 'react'
import styles from './ImageInput.module.css'

interface Props {
  value?: string
  name?: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
  width?: string
  fontSize?: string
  fontWeight?: string
}

const ImageInput = ({value, onChange}: Props) => {
  return (
    <div>
      <div className={styles.formbold_file_input}>
        <input type="file" name="file" id="file"  value={value} onChange={onChange} />
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
