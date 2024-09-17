import React from 'react'

export const Greet = (Props) => {
    const {name,heroName}=Props
  return (
    <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}
