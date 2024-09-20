import React, { useState } from 'react'
import useCounter from './useCounter'

export default function CounterOne() {
     const [count,increment,decrement,reset]=useCounter(0, 10)
  return (
    <div>
         count- {count}
         <button onClick={increment}>increment</button>
         <button onClick={decrement}>decrement</button>
         <button onClick={reset}>reset</button>
    </div>
  )
}

