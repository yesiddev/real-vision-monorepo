import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import List from './List'
import styles from './Lists.module.css'

interface Props {
  draggableId?: any
  destination?: any
  source?: any
}

const Lists = () => {
  const isPositionChanged = ({destination, source}:Props) => {
    if (!destination) return false;
    const isSameList = destination.droppableId === source.droppableId;
    const isSamePosition = destination.index === source.index;
    return !isSameList || !isSamePosition;
  };
  

  const handleIssueDrop = ({draggableId, destination, source}: Props) => {
    if(!isPositionChanged({source, destination})) return;
      const issueId = draggableId;

      console.log(draggableId)
      console.log(destination.droppableId)

    
  }

  return (
    <DragDropContext onDragEnd={handleIssueDrop}>
      <div className={styles.lists}>
        {Object.values(['Ideas', 'To Do', 'In Process', 'Sprint', 'Review', 'Finished']).map((status) => (
            <List key={status} status={status} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default Lists
