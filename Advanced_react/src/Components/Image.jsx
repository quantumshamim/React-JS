import React from 'react'
import Picture from '/img/car2.jpg'

function Image() {
  return (
    <div>
      <img src="./img/car1.jpg" alt="" />
      <img src={Picture} alt="" />
    </div>
  )
}

export default Image
