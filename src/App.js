import React from 'react'
import ReactDOM from 'react-dom'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

import Die from './components/Die'



export default function App(){
/**
 * Challenge: Allow the user to play a new game when the button is clicked and the've already won
 */

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const diceElements = dice.map(die => <Die 
    key={die.id} 
    value={die.value}
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}
    />)




  React.useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld);
    const allSameValue = dice.every(die => die.value === dice[0].value)
    if (allHeld && allSameValue){
      setTenzies(true);
    }
  },[dice])





  function generateNewDie(){
    return {
      value: Math.ceil(Math.random()*6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice(){
      const newDice = [];
      for (let i=0; i<10; i++){
        newDice.push(generateNewDie())
      }
      return newDice
  }
  function rollDice(){
    const rollDice = () => setDice(prevDice => prevDice.map(die => 
      (die.isHeld ? die : generateNewDie())
      ))
    if (tenzies){
      setDice(allNewDice());
      setTenzies(false)
    } else {
      rollDice()
    }
  }
  function holdDice(id){
    setDice(oldDice => oldDice.map(die => (
      die.id === id ? {...die, isHeld:!die.isHeld} : die
    )))
  }




  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title' >Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>{tenzies ? 'New Game':'Roll'}</button>

    </main>
  )
}