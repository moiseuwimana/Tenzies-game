import React from 'react'
import ReactDOM from 'react-dom'
import {nanoid} from 'nanoid'

import Die from './components/Die'



export default function App(){
  /**
   * Challenge: Update the 'holdDice' function to flip the 'isHeld' property on the object in the array that was clicked, based on the 'id' prop passed into the function.
   * 
   * Hint: as usual, there's > 1 way to accomplish this. I'll be using 'dice.map()' and checking for the 'id' of the die to determine which one to flip 'isHeld' on, but you can do whichever way makes way makes the most sense to you.
   */

  const [dice, setDice] = React.useState(allNewDice())



  function allNewDice(){
      const newDice = [];
      for (let i=0; i<10; i++){
        newDice.push(
          {
            value: Math.ceil(Math.random()*6),
            isHeld: false,
            id: nanoid()
          }
          )
      }
      return newDice
  }
  function rollDice(){
    setDice(allNewDice())
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
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>

    </main>
  )
}