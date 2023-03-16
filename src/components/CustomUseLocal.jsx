import useLocalStorage from "../hooks/useLocalStorage"

function CustomUseLocal() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e)=>{
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }
    
    setTasks([...tasks, taskObj ])    
  }

  return (
    <>    <form className='w-50' onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Task</label>
        <input className='form-control' type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      </div>
      <button className="btn btn-primary">
        Submit
      </button>      
    </form>
    <hr />
    {tasks.map((i)=>(
      <div key={Math.random(100)}>
        {i.task && <h3 key={Math.random(100)}>Task: {i.task}</h3>}        
      </div>
      
    ))}
    </>

  )
}

export default CustomUseLocal
