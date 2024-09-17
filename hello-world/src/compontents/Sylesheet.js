import React from 'react'
import './Myfile.css'
export default function Sylesheet(Props) {
    let className=Props.primary ? 'primary' : ''
  return (
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
  )
}
