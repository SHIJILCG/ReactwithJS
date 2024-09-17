import React from 'react'
import Person from './Person'

export default function NameList() {
    const names=['Bruce','Clark','Diana']
    //  const Persons=[
    //      {id:1,
    //         name:'Burce',
    //         age:30,
    //         skill:'React'
    //      },
    //      {
    //         id:2,
    //        name:'Clark',
    //        age:25,
    //        skill:'Angular', 
    //      },
    //      {
    //         id:3,
    //         name:'Diana',
    //         age:28,
    //         skill:'Vue'
    //      }
    //  ]
     const PersonList = names.map((name,index) => (
          <Person person={name} key={index}></Person>
     ))
      return  <div>{PersonList}</div>
         
 }

