import React from 'react'
import Hand from '../Hand/Hand'
import './home.css'
import scissors from '../../images/icon-scissors.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import { HandContext } from '../HandProvider'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const iconVariants = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 0.9
    }
    
}

const routeVariants = {
    hidden: {
        x: '100vw'
    },
    visible : {
        x: 0,
        transition:{
            delay: 0.1,
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}


function Home() {
    const {state,dispatchState} = React.useContext(HandContext)
    console.log(state)

    function handleClick(type){
        dispatchState({type: 'USER', payload: type})
    }
  return (
    <motion.div className='home-container' variants={routeVariants} initial="hidden" animate="visible" exit="exit">
        <motion.div className="paper" variants={iconVariants} whileHover="hover" whileTap="tap">
            <Link to="game"  onClick={()=>handleClick('paper')}>
                <Hand type="paper" />
            </Link>
        </motion.div>

        <motion.div className="scissors"  variants={iconVariants} whileHover="hover" whileTap="tap">
            <Link to="game"  onClick={()=>handleClick('scissors')}  >
                <Hand type="scissors"/>
            </Link>
        </motion.div>

        <motion.div className="rock"  variants={iconVariants} whileHover="hover" whileTap="tap">
            <Link to="game"  onClick={()=>handleClick('rock')} >
                <Hand  type="rock"/>
            </Link>
        </motion.div>
        
    </motion.div>
  )
}

export default Home