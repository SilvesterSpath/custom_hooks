import React, { useState, useCallback } from 'react';

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  /*   const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'Some Task']);
  }, [setTasks]); */

  const addTask = () => {
    setTasks((prev) => [...prev, 'some task']);
  };

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((i, idx) => (
        <p key={idx}>{i}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
