import React from 'react'
import './hand.css'
import scissors from '../../images/icon-scissors.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'


function Hand({image,type,isWinner}) {
    let style = {}
    let src = ''
    switch(type){
        case "paper":
            style = {background: 'linear-gradient(to bottom, hsl(230, 89%, 62%) , hsl(230, 89%, 65%))'};
            src = paper
            break;
        case "scissors":
            style = {background: 'linear-gradient( to bottom, hsl(39, 89%, 49%) , hsl(40, 84%, 53%)'};
            src = scissors
            break;
        case "rock":
            style = {background: 'linear-gradient( to bottom,  hsl(349, 71%, 52%) , hsl(349, 70%, 56%)'};
            src = rock
            break;
        default: 
            style = {backgroundColor: 'red'}
            break;
    }
  return (
    <div className={isWinner ? 'larger-circle winner' : 'larger-circle'} style={style}>
        <div className={isWinner ? 'circle winner' : 'circle'}>
            <img src={src} alt="" className='hand-img'/>
        </div>
    </div>
  )
}

export default Hand