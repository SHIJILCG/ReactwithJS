import React from 'react'
import useCounter from './useCounter'

export default function CounterTwo() {
     console.log("this is and page   runing")
    const [count,increment,decrement,reset]=useCounter(0, 1)
    return (
      <div>
           count- {count}
           <button onClick={increment}>increment</button>
           <button onClick={decrement}>decrement</button>
           <button onClick={reset}>reset</button>
      </div>
  
  )
}
