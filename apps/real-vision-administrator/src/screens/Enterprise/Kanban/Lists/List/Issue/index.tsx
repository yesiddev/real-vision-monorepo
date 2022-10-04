import Button from '@/components/shared/Button';
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Link, useLocation } from 'react-router-dom';
import styles from './Issue.module.css';

interface Props {
  issueId: string;
  title: string;
  priority: string;
  code: number;
  index: number;
}

const Issue = ({issueId, priority, title, code, index}: Props) => {

  const {pathname} = useLocation();

  return (
    <Draggable draggableId={issueId.toString()} index={index}>
       {(provided, snapshot) => (
        <Link 
        to={`/kanban/issues/${issueId}`} 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={styles.issue_link}>
          <div className={`${styles.issue} ${snapshot.isDragging && !snapshot.isDropAnimating && styles.isDrag}`}>
            <p className={`${styles.issue_header} ${styles[`${priority}`]} `}>
              <span>#{code}</span>
              <span>2 months ago</span>
            </p>
            <p className={styles.title}>
              {title}
            </p>

            <div className={styles.bottom}>
              <div>

              </div>
            </div>
          </div>
        </Link>
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
