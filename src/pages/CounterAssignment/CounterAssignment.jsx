import React,{useState} from 'react'
import './CounterAssignment.css'

export default function CounterAssignment() {

const [count, setCount] = useState(0)

// function decrement(){ setCount(count-1) }
// function increment(){ setCount(count+1) }
// function reset(){ setCount(0) }

  return (
    <div className="container">
<p> Counter: {count}</p>
<button onClick={()=>{setCount(count-1)}}>-</button>
<button onClick={()=>{setCount(0)}}>reset</button>
<button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}
