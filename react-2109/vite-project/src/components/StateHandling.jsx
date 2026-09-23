import React, {useState} from 'react'

const StateHandling = () => {
    // const [count, setCount] = useState(100);
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    
    // const [count, setCount] = useState(100);

    // function handleIncrement() {
    //     setCount(count * 200000000000000);
    // }

    // function handleDecrement() {
    //     setCount(count - 20);
    // }
    // function handlemultiply() {
    //     setCount(count * 20);
    // }

    // function handleReset() {
    //     setCount(0);
    // }
  

  return (
    <div>
        <h2> Change Background color</h2>
        <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`,border:2px , width: "400px", height: "100px"}}></div>
      {/* Hello State Handling
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button> */}
      {/* <button onClick={()=>setCount(count+20)}>Increment</button>
      <button onClick={()=>setCount(count-20)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
       */}
    </div>
  )
}

export default StateHandling
