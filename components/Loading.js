import React from 'react'
import {Image} from './Layout'

function Loading() {
  return (
    <>
      <Image src="/corona.jpg" />
      <p>Ihr Standort wird mit den Daten des RKI's abgeglichen...</p>
    </>
  )
}

export default Loading
