import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
	  <>
		{tasks.map((task) => (
			<Task key={Task.id} task={task} onDelete={onDelete} />
		)) }
	  </>
	
  )
}

export default Tasks