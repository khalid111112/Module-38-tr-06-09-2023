import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './actor'
import Singer from './Singer'
import BookStore from './Bookstore'

function App() {
  const actor = ['sakib', 'Raj', 'Jasim', 'Rubel', 'salman Shah'];
  const books = [
    {id: 1, name: 'physics', price: 100 },
    {id: 2, name: 'Math', price: 120 },
    {id: 3, name: 'chemistry', price: 130 },
    {id: 4, name: 'Biology', price: 150 }
  ]
  const singer = [
    {id: 1, name: 'Dr Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books = {books}></BookStore>
      {
        singer.map(singer => <Singer signer={singer}></Singer>)
      }

      <Actor name ={'Bappa Raz'}></Actor> 
      {
        actor.map(actor =><Actor name={actor}></Actor>)
      }
     {/* <Todo tasl = 'Learn React' isDone={true}></Todo>
     <Todo tasl = 'Core concepts' isDone={false}></Todo>
     <Todo tasl = 'try JSX' isDone={true}></Todo> */}
    </>
  )
}

export default App
