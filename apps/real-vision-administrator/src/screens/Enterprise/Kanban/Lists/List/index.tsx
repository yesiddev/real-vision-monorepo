import React, {useEffect, useState} from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Issue from './Issue'
import styles from './List.module.css'
import {v4 as uuid} from 'uuid'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { getIssues } from '@/redux/states/issues'
import { Issue as IssueType } from '@rv/types'
interface Props {
    status: string
}

// const issues = [
//   {
//     id: uuid(),
//     title: "Create post about marketing",
//     status: 'IDEAS'
//   },
//   {
//     id: uuid(),
//     title: "Config partiaf monorepo",
//     status: 'TO DO'
//   },
//   {
//     id: uuid(),
//     title: "Remove content dont usable",
//     status: 'IN PROCESS'
//   }
// ]

// interface Issue {
//   _id: string;
//   code: number;
//   description: string;
//   priority: string;
//   title: string;
//   state: number;
// }

const STATUS = ['IDEAS', 'TO DO', 'IN PROCCESS', 'SPRINT']

const List = ({status}: Props) => {

  const {loading, issues=[]} = useSelector((state:AppStore) => state.issues) 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssues() as any)
  }, [])

  console.log(issues)
  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <div className={styles.list}>
            <h2>{status}</h2>
            <div className={styles.issues} {...provided.droppableProps} ref={provided.innerRef} >
               {issues.filter((issue: IssueType) => issue.status.toUpperCase() == status.toUpperCase()).map((issue: any, index:number) => (
                <Issue key={issue._id} issueId={issue._id} priority={issue.priority} code={issue.code} title={issue.title} index={index}  />
              ))} 
                {provided.placeholder}
            </div>
        </div>
      )}
    </Droppable>
  )
}

export default List
