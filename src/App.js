import React from 'react'
import ReactDOM from 'react-dom'
import {nanoid} from 'nanoid'

import Die from './components/Die'



export default function App(){
  /**
   * Challenge: Add conditional styling to the Die component so that if it's held (isHeld === true), its background color changes to a light green (#59E391)
   * 
   * Remember: currently the Die component has no way of knowing if it's "held" or not.
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



  const diceElements = dice.map(die => <Die 
    key={die.id} 
    value={die.value}
    isHeld={die.isHeld}
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