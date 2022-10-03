import Field from '@/components/shared/Field'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'
import TextEditor from '@/components/shared/TextEditor'
import React from 'react'
import styles from './IssueCreate.module.css'

interface Props {
    setIsOpen: Function;
}

const IssueCreate = ({setIsOpen}: Props) => {
  return (
    <div className={styles.form_element}>
    <h2 className={styles.form_heading}>
        Create issue
    </h2>

    <Field label='Issue Type' tip='Start typing to get a list of possible matches.'>
        <Select />
    </Field>
    <Field label='Short Summary' tip='Concisely summarize the issue in one or two sentences.'>
        <Input />
    </Field>
    <Field label='Description' tip='Describe the issue in as much detail as you"d like.'>
        <TextEditor />
    </Field>
    <Field label='Priority' tip='Priority in relation to other issues.'>
        <Select />
    </Field>

    <div className={styles.actions}>
        <button className='primary' >Create Issue</button>
        <button className='second' onClick={() => setIsOpen(false)} >Cancel</button>
    </div>
    </div>
  )
}

export default IssueCreate
