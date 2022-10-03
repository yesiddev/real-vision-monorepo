import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Issue = () => {
    const index = 0;
  const issue = {
    id: 'issueid',
  }
  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
       {(provided, snapshot) => (
        <button>{issue.id}</button>
        // <IssueLink
        //   to={`${match.url}/issues/${issue.id}`}
        //   ref={provided.innerRef}
        //   data-testid="list-issue"
        //   {...provided.draggableProps}
        //   {...provided.dragHandleProps}
        // >
        //   <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
        //     <Title>{issue.title}</Title>
        //     <Bottom>
        //       <div>
        //         <IssueTypeIcon type={issue.type} />
        //         <IssuePriorityIcon priority={issue.priority} top={-1} left={4} />
        //       </div>
        //       <Assignees>
        //         {assignees.map(user => (
        //           <AssigneeAvatar
        //             key={user.id}
        //             size={24}
        //             avatarUrl={user.avatarUrl}
        //             name={user.name}
        //           />
        //         ))}
        //       </Assignees>
        //     </Bottom>
        //   </Issue>
        // </IssueLink>
      )}
    </Draggable>
  )
}

export default Issue
