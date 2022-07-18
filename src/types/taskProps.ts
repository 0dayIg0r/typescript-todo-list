
import { Task } from "./task"
export interface TaskProps{
    task: Task
    deleteTask(id: string): void
}