
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HandContext } from '../HandProvider'
import {motion} from 'framer-motion'
import './finish.css'

const iconVariants = {
  hover: {
      scale: 1.1
  },
  tap: {
      scale: 0.9
  }
  
}


function Finish({text}) {
  const {dispatchState,state} = React.useContext(HandContext)
  
  function playAgain(){
    
    dispatchState({type: 'CLEAR'})
    console.log(state)
    
  }
    
  return (
    <div className="finish-container">
        <h1 className='finish-text'>{text}</h1>
        <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
          <Link to='/' className='finish-button' onClick={playAgain}>play Again</Link>
        </motion.div>
    </div>
  )
}

export default Finish