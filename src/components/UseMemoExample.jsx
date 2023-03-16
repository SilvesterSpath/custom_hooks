import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  /* const sqrt = getSqrt(number) */
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  // with putting a callback into a useState() we have access to the prevState
  const onClick = () => {
    setIncrement((i) => {
      console.log(i);
      return i + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        className='form-control w-25'
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>Renders: {renders.current}</h3>
      <h2 className='my-3'>
        The square root of {number} is {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={onClick}>
        Rerender
      </button>
      <h2>{increment}</h2>
    </div>
  );
}

function getSqrt(number) {
  for (let i = 0; i <= 4000; i++) {
    console.log(i);
  }

  console.log('Expensive function called!');
  return Math.sqrt(number);
}

export default UseMemoExample;
