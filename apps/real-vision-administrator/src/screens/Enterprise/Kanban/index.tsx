import React from 'react'
import styles from './Kanban.module.css'
import { Route } from 'react-router-dom';
import Board from './Board';
import Sidebar from './Sidebar';

const Kanban = () => {
  return (
    <div className={styles.container}>
        <Sidebar />
        <div className="screen">
            <Board />
        </div>
    </div>
  )
}

export default Kanban
