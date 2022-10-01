import React from 'react'
import Hand from '../Hand/Hand'
import './game.css'
import { HandContext } from '../HandProvider'
import Finish from '../Finish/Finish'
import {AnimatePresence, motion} from 'framer-motion'

const moveVariants = {
  hidden: {
    y: 20
  },
  visible: {
    y: 0,
    transition: {
      yoyo: 6,
      delay: 0.2
    }
  }
}


const textVariants = {
  hidden: {
    y: '100vh'
  },
  visible: {
    y: 0,
  },
}

const routeVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition:{
      delay: 0.4,
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
  },

}

function Game() {
  const {state,dispatchState} = React.useContext(HandContext)

function sleep(){
  return new Promise(resolve => {
    setTimeout(()=>{
      let array = ['paper','scissors','rock']
      let randomNummber = Math.floor(Math.random() * array.length)
      let computerMove  =array[randomNummber]
      resolve(computerMove)
    },2000)
  })
}
  
  React.useEffect(()=>{
    console.log('runned')
    async function randomMove(){
      const comMove = await sleep()
      console.log(comMove)
      dispatchState({type:"COMPUTER",payload: comMove})
    }
    randomMove()
    
  },[])

    
 

  console.log(state)
  return (
    <motion.div className="game-container" variants={routeVariants} initial="hidden" animate="visible" exit="exit">
      
        <div className="player" >
            <h1 className='game-text'>You picked</h1>
            <motion.div className="move-container" variants={moveVariants} initial="hidden" animate="visible" style={{
             
            }}>
                <Hand type={state.userMove} isWinner={
                  state.finalText === "You win" ? true : false
                }/>
            </motion.div>
        </div>
        <AnimatePresence>
          {state.finalText && 
            <motion.div className="final-finish" variants={textVariants}  initial="hidden" animate="visible">
              <Finish text={state.finalText} />
            </motion.div>
          }
        </AnimatePresence>
        <motion.div className="computer">
            <h1 className='game-text'>The house picked</h1>
            <div className="move-container">
                {state.computerMove ?  <Hand type={state.computerMove} isWinner={
                  state.finalText === "You lose" ? true : false
                }/> : <PlaceHolder/> }
            </div>
        </motion.div>
        
    </motion.div>
  )
}

function PlaceHolder(){
  return (
    <div className='placeholder'>

    </div>
  )
}

export default Game


// React.useEffect(()=>{
//   console.log('hello')
//     if(state.userMove === "paper" && state.computerMove === "scissors"){
//         dispatchState({type:"SET_TEXT",payload: "You lose"})
//         setFinish(true)
//     } 
//     else if (state.userMove === "paper" && state.computerMove === "rock") {
//       dispatchState({type:"SET_TEXT",payload: "You win"})
//       setFinish(true)
//     }
//     else if (state.userMove === "scissors" && state.computerMove === "rock") {
//       dispatchState({type:"SET_TEXT",payload: "You lose"})
//       setFinish(true)
//     }
//     else if (state.userMove === "scissors" && state.computerMove === "paper") {
//       dispatchState({type:"SET_TEXT",payload: "You win"})
//       setFinish(true)
//     }
//     else if (state.userMove === "rock" && state.computerMove === "paper") {
//       dispatchState({type:"SET_TEXT",payload: "You lose"})
//        setFinish(true)
//     }
//     else if (state.userMove === "rock" && state.computerMove === "scissors") {
//       dispatchState({type:"SET_TEXT",payload: "You win"})
//        setFinish(true)
//     }
//     else if (state.userMove === state.computerMove){
//       dispatchState({type: "SET_TEXT",payload: "Tie"})
//        setFinish(true)
//     }
// },[setFinish,finish])