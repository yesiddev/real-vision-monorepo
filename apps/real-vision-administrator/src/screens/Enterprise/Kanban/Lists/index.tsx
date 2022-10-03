import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import List from './List'
import styles from './Lists.module.css'

const Lists = () => {

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className={styles.lists}>
        {Object.values(['Ideas', 'To Do', 'In Process', 'Sprint', 'Review', 'Finished']).map((status) => (
            <List key={status} status={status} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default Lists
