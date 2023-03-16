import {useState, useEffect, useRef} from 'react'

function PrevState() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')

  console.log('renders variable :', renders);
  console.log('prevName variable :', prevName);

  useEffect(() => {
    renders.current += 1
    console.log('renders.current :', renders.current);
    prevName.current = name
    console.log('prevName.current :', prevName.current);  
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control mb-3" />
      
    </div>
  )
}

export default PrevState