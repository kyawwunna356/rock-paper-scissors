import React from 'react'
import './rule.css'

function Rule({setShowModal}) {
  return (
    <button className="rule" onClick={()=>{setShowModal(prevState => !prevState)}}>Rules</button>
  )
}

export default Rule