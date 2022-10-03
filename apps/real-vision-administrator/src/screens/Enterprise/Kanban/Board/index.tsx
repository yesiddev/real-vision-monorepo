import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Button from '@/components/shared/Button'
import HeaderScreen from '@/components/shared/Header'
import Modal from '@/components/shared/Modal'
import React from 'react'
import { useState } from 'react'
import IssueCreate from '../IssueCreate'
import Lists from '../Lists'

const Board = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
         <Breadcrumbs items={['Enterprise', 'Kanban', 'Projects']} />
         <HeaderScreen title='Kanban Board'>
            <Button className='primary' onClick={() => setIsOpen(true)}>Create Issue</Button>
         </HeaderScreen>
         <Lists />
         <Modal 
            className='modal'
            isOpen={isOpen}
            setIsOpen={() => {}}
            testid="modal:issue-create"
            variant='center'
            onClose={(modal:any) => {}}
            width={800}
            withCloseIcon={false}
            renderContent={(modal:any) => (
                <IssueCreate setIsOpen={setIsOpen} />
            )}
         />
    </>
  )
}

export default Board
