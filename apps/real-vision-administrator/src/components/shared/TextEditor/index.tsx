import React, { useState } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styles from './TextEditor.module.css';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import ReactQuill from 'react-quill';

interface Props {
    className: string;
}

const TextEditor = ({className}: Props) => {
    const [value, setValue] = useState('');
    return (
        <div className={className == 'page'? 'container_page' : styles.container}>
            <ReactQuill value={value} onChange={setValue} />

            {/* <div dangerouslySetInnerHTML={{__html: value}}>
            </div> */}
        </div>
    )
}

export default TextEditor
