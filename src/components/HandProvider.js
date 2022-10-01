import React from 'react'
import { useNavigate } from 'react-router-dom'
export const HandContext = React.createContext()

function HandProvider({children}) {
    const navigate = useNavigate()
    let initialState = {}
      if(localStorage.getItem('score')){
        initialState = {
          userMove: '',
          computerMove: '',
          score: localStorage.getItem('score'),
          finalText: ''
      }
      } else {
        initialState = {
          userMove: '',
          computerMove: '',
          score: 0,
          finalText: ''
      }
      }
    

    const userMove = (state,type) =>{
        return {...state,userMove: type}
    }

    const computerMove = (state,move) =>{
        // let array = ['paper','scissors','rock']
        // let randomNummber = Math.floor(Math.random() * array.length)
        // let computerMove  =array[randomNummber]
        let finalText = ''
        let score = state.score 
        if(state.userMove === "paper" && move === "scissors"){
            console.log('1')
            finalText = "You lose"
            score--
        } 
        else if (state.userMove === "paper" && move === "rock") {
          console.log('2')
          finalText = "You win"
          score++
         
        }
        else if (state.userMove === "paper" && move === "paper") {
          console.log('3')
          finalText = "Tie"
         
         
        }
        else if (state.userMove === "scissors" && move === "rock") {
          console.log('4')
          finalText = "You lose"
          score--
         
        }
        else if (state.userMove === "scissors" && move === "paper") {
          console.log('5')
          finalText = "You win"
          score++
         
        }
        else if (state.userMove === "scissors" && move === "scissors") {
          console.log('6')

          finalText = "Tie"
         
         
        }
        else if (state.userMove === "rock" && move === "paper") {
          console.log('7')
          finalText = "You lose"
          score--
          
        }
        else if (state.userMove === "rock" && move === "scissors") {
          console.log('8')
          finalText = "You win"
          score++

        }
        else if (state.userMove === "rock" && move === "rock") {
          console.log('9')
          finalText = "Tie"

        }
        localStorage.setItem('score', score)
        return {...state, computerMove: move, finalText: finalText, score: score}
    }

    function clear(state){
        return {
          ...state,
          userMove: '',
          computerMove: '',
          finalText: ''
        }
    }

    function reducer(state,action){
        switch(action.type){
            case 'USER':
                return userMove(state,action.payload);
            case 'COMPUTER':
                 return computerMove(state,action.payload);
            case 'CLEAR':
                return clear(state)
            default: 
                return state
        }
    }
    const [state,dispatchState] =  React.useReducer(reducer,initialState)
  return (
    <HandContext.Provider value={{state,dispatchState}}>
        {children}
    </HandContext.Provider>
  )
}

export default HandProvider