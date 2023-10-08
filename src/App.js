import React from 'react'
import ReactDOM from 'react-dom'
import {nanoid} from 'nanoid'

import Die from './components/Die'



export default function App(){
  /**
   * Challenge: Update the 'rollDice' function to not just roll all new dice, but instead to look through the existing dice to NOT role any that are being 'held'.
   * 
   * Hint: this will look relatively similiar to the 'holdDice' function below. When creating new dice, remember to use 'id: nanoid()' so any new dice have an 'id' as well.
   */

  const [dice, setDice] = React.useState(allNewDice())


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
    setDice(prevDice => prevDice.map(die => 
      (die.isHeld ? die : generateNewDie())
      ))
  }
  function holdDice(id){
    setDice(oldDice => oldDice.map(die => (
      die.id === id ? {...die, isHeld:!die.isHeld} : die
    )))
  }





  const diceElements = dice.map(die => <Die 
    key={die.id} 
    value={die.value}
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}
    />)



  return (
    <main>
      <h1 className='title' >Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>

    </main>
  )
}