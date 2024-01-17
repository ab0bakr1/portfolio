import React from 'react'

const CardInfo = ({name,type}) => {
  return (
    <>
        <h4>{type}</h4>
        <h3>{name}</h3>
    </>
  )
}

export default CardInfo