import { useState } from "react"

function TaskForm() {
  const[taskName,SetTaskName] = useState("")
  
  const handleSubmit = (e:any) => {
    e.preventDefault
    console.log(taskName)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
        type="text" name="taskName" placeholder="Task name"
        onChange={(e)=>SetTaskName(e.target.value)}
        />
        <button >Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm