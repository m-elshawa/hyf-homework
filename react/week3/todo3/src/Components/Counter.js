import React, {useState, useEffect} from 'react'

export default ({ name }: Props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return <p>{counter}</p>;
};

