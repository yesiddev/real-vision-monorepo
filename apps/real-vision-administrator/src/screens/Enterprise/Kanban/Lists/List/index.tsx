import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Issue from './Issue'
import styles from './List.module.css'

interface Props {
    status: string
}

const List = ({status}: Props) => {
  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <div className={styles.list}>
            <h2>{status}</h2>
            <div className={styles.issues} {...provided.droppableProps} ref={provided.innerRef} >
                <Issue />
                {provided.placeholder}
            </div>

        </div>
      )}
    </Droppable>
  )
}

export default List
