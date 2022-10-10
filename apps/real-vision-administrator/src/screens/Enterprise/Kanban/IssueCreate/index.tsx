import Field from '@/components/shared/Field'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'
import SelectSearch from '@/components/shared/SelectSearch'
import TextEditor from '@/components/shared/TextEditor'
import { getAdmins } from '@/redux/states/admin'
import { createIssue } from '@/redux/states/issues'
import { Admin } from '@rv/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './IssueCreate.module.css'

interface Props {
    setIsOpen: Function;
}

const IssueTypes =[
    {
        name: "Bug",
        value: 'Bug'
    },
    {
        name: 'Task',
        value: 'Task'
    },
    {
        name: 'Story',
        value: 'Story'
    },
    {
        name: 'Epic',
        value: 'Epic'
    },
    {
        name: 'Subtask',
        value: 'Subtask'
    },
    {
        name: 'Change',
        value: 'Change'
    },
    {
        name: 'Incident',
        value: 'Incident'
    },
    {
        name: 'New feature',
        value: 'New feature'
    },
    {
        name: 'Problem',
        value: 'Problem'
    },
    {
        name: 'Service request',
        value: 'Service request'
    }
]


const PriorityTypes =[
    {
        name: "Delayed",
        value: 'Delayed'
    },
    {
        name: 'Moderate',
        value: 'Moderate'
    },
    {
        name: 'Express',
        value: 'Express'
    },
    {
        name: 'Urgent',
        value: 'Urgent'
    },
]

const StatusTypes =[
    {
        name: "Ideas",
        value: 'Ideas'
    },
    {
        name: 'To do',
        value: 'To do'
    },
    {
        name: 'In Process',
        value: 'In Process'
    },
    {
        name: 'Sprint',
        value: 'Sprint'
    },
    {
        name: 'Review',
        value: 'Review'
    },{
        name: 'Finished',
        value: 'Finished'
    },
]



const IssueCreate = ({setIsOpen}: Props) => {
    let adminsOptions = [];
    const {loading, admins = []} = useSelector((state: any) => state.admins)
    const dispatch = useDispatch();

    const [type, setType] = useState('Bug');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reporter, setReporter] = useState('');
    const [assigness, setAssigness] = useState([]);
    const [status, setStatus] = useState('Ideas');
    const [priority, setPriority] = useState('Delayed');

    useEffect(() => {
        dispatch(getAdmins() as any);
    }, [])

    const onSubmit = (e:any) => {
        e.preventDefault();
        dispatch(createIssue({type: JSON.parse(type)?.value, title, description, reporter: JSON.parse(reporter), assigness ,status: JSON.parse(status)?.value, priority: JSON.parse(priority).value}) as any)
    }

    if(!loading) {
        adminsOptions = admins.map((admin:any) => {
            return {name: admin.name + " " + admin.lastname, value: admin._id}
        })
    }

    console.log(priority)


  return (
    <div className={styles.form_element}>
    <h2 className={styles.form_heading}>
        Create issue
    </h2>

    <Field label='Issue Type' tip='Start typing to get a list of possible matches.'>
        <Select options={IssueTypes} onChange={setType} />
    </Field>
    <Field label='Short Summary' tip='Concisely summarize the issue in one or two sentences.'>
        <Input onChange={(e) => setTitle(e.target.value)} />
    </Field>
    <Field label='Description' tip="Describe the issue in as much detail as you'd like.">
        <TextEditor value={description} setValue={setDescription} />
    </Field>


    <Field label='Reporter'>
        <Select options={adminsOptions} onChange={setReporter} />
    </Field>
    <Field label='Assignees'>
        <SelectSearch value={assigness} setValue={setAssigness} options={adminsOptions} />
    </Field>

    <div className="flex">
        
    <Field label='Status'>
        <Select options={StatusTypes} onChange={setStatus}  />
    </Field>
    <Field label='Priority' tip='Priority in relation to other issues.'>
        <Select options={PriorityTypes} onChange={setPriority} />
    </Field>
    </div>

    <div className={styles.actions}>
        <button className='primary' onClick={onSubmit} >Create Issue</button>
        <button className='second' onClick={() => setIsOpen(false)} >Cancel</button>
    </div>
    </div>
  )
}

export default IssueCreate
