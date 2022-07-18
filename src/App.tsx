import { useState } from "react";
// Componnents
import TodoTask from "./components/TodoTask/TodoTask";

// Types
import { Task } from "./types/task";
import './styles/styles.css'

// Service UUID 
import { idGenerator } from "./services/IdGenerator";

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
	const [task, setTask] = useState<string>('')
	const [todoList, setTodoList] = useState<Task[]>([])



	function addTask():void {

		if(!task){
			toast.error('Não da pra fazer nada né❓  ', {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				})
		} else{
			const generateId = new idGenerator()
			const id = generateId.generate()
	
			const newTask = {
				id,
				task
			}
			setTodoList([...todoList, newTask])
			setTask('')
		}
		
	}
	function deleteTask(id:string):void  {
		setTodoList(todoList.filter((t) => t.id !== id))
		toast.error('Sua tarefa foi finalizada 🦾 ', {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			})
		
	}
	return (
		<div className="App">

			<ToastContainer/>

			<header>

				<h2>O que tem pra hoje?</h2>

				<input
					type="text" autoComplete="off"
					placeholder="O que deseja fazer?"
					name="task"
					value={task}
					className="input"
					onChange={(e) => setTask(e.target.value)}
				/>

				<button type="submit" onClick={addTask} className="btn-header">Adicionar Tarefa</button>
			</header>

			<div className="line"></div>

			{todoList.map((task, key) => (
				<TodoTask 
				key={key} 
				task={task} 
				deleteTask = {deleteTask}
				/>
			))}



		</div>
	);
}

export default App;
