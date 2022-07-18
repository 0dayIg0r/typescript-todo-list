import { useState } from 'react'
// Type
import { TaskProps } from '../../types/taskProps';
// CSS
import './styles.css'




function TodoTask({ task, deleteTask }: TaskProps) {



   return (
      <div className="card">
         <div onClick={() => deleteTask(task.id)}>
            <p >{task.task}
            </p>
         </div>

         <div className="line2" >
            <span className="btn-card" onClick={() => deleteTask(task.id)}>🗑️</span>
         </div>
      </div>
   );
}

export default TodoTask;
