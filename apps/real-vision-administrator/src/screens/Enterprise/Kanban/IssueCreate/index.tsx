import Field from '@/components/shared/Field'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'
import SelectSearch from '@/components/shared/SelectSearch'
import TextEditor from '@/components/shared/TextEditor'
import { getAdmins } from '@/redux/states/admin'
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
        title: "Bug",
        value: 'Bug'
    },
    {
        title: 'Task',
        value: 'Task'
    },
    {
        title: 'Story',
        value: 'Story'
    },
    {
        title: 'Epic',
        value: 'Epic'
    },
    {
        title: 'Subtask',
        value: 'Subtask'
    },
    {
        title: 'Change',
        value: 'Change'
    },
    {
        title: 'Incident',
        value: 'Incident'
    },
    {
        title: 'New feature',
        value: 'New feature'
    },
    {
        title: 'Problem',
        value: 'Problem'
    },
    {
        title: 'Service request',
        value: 'Service request'
    }
]


const PriorityTypes =[
    {
        title: "Delayed",
        value: 'Delayed'
    },
    {
        title: 'Moderate',
        value: 'Moderate'
    },
    {
        title: 'Express',
        value: 'Express'
    },
    {
        title: 'Urgent',
        value: 'Urgent'
    },
]

const StatusTypes =[
    {
        title: "Ideas",
        value: 'Ideas'
    },
    {
        title: 'To do',
        value: 'To do'
    },
    {
        title: 'In Process',
        value: 'In Process'
    },
    {
        title: 'Sprint',
        value: 'Sprint'
    },
    {
        title: 'Review',
        value: 'Review'
    },{
        title: 'Finished',
        value: 'Finished'
    },
]



const IssueCreate = ({setIsOpen}: Props) => {
    let adminsOptions = [];
    const {loading, admins = []} = useSelector((state: any) => state.admins)
    const dispatch = useDispatch();

    const [assignees, setAssignees] = useState([]);

    useEffect(() => {
        dispatch(getAdmins() as any);
    }, [])

    if(!loading) {
        adminsOptions = admins.map((admin:any) => {
            return {title: admin.name + " " + admin.lastname, value: admin._id}
        })
    }

    console.log(assignees)


  return (
    <div className={styles.form_element}>
    <h2 className={styles.form_heading}>
        Create issue
    </h2>

    <Field label='Issue Type' tip='Start typing to get a list of possible matches.'>
        <Select options={IssueTypes} />
    </Field>
    <Field label='Short Summary' tip='Concisely summarize the issue in one or two sentences.'>
        <Input />
    </Field>
    <Field label='Description' tip="Describe the issue in as much detail as you'd like.">
        <TextEditor />
    </Field>
    <Field label='Reporter'>
        <Select options={adminsOptions} />
    </Field>

    <Field label='Assignees'>
        <SelectSearch value={assignees} setValue={setAssignees} options={adminsOptions} />
    </Field>

    <div className="flex">
        
    <Field label='Status'>
        <Select options={StatusTypes} />
    </Field>
    <Field label='Priority' tip='Priority in relation to other issues.'>
        <Select options={PriorityTypes} />
    </Field>
    </div>

    <div className={styles.actions}>
        <button className='primary' >Create Issue</button>
        <button className='second' onClick={() => setIsOpen(false)} >Cancel</button>
    </div>
    </div>
  )
}

export default IssueCreate
