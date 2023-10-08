import React from 'react'
import ReactDOM from 'react-dom'

import Die from './components/Die'


/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */


export default function App(){

  function allNewDice(){
      const newDice = [];
      for (let i=0; i<10; i++){
        newDice.push(Math.ceil(Math.random()*6))
      }
      return newDice
  }


  return (
    <main>
      <div className='dice-container'>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={7}/>
        <Die value={8}/>
        <Die value={9}/>
        <Die value={10}/>
      </div>

    </main>
  )
}