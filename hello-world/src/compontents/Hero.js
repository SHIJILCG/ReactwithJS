import React from 'react'

export default function Hero({HeroName}) {
    if(HeroName === 'Joker'){
        throw new Error ('Not A Hero')
    }
  return (
    <div>Hero Name is {HeroName}</div>
  )
}
