import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


export default function ParentComponent() {
    const [age, setage] = useState(25)
    const [Salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setage(age + 1)
    },[age])
    const IncrementSalary = useCallback(() => {
        setSalary(Salary + 1)
    },[Salary])
  return (
    <div className="flex justify-center align-middle">
         <Title />
        <Count text="Age" count={age}/>
        <Button handlClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={Salary}/>
        <Button handlClick={IncrementSalary}>Increment Salary</Button>
    </div>
  )
}
