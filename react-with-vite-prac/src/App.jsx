import React from 'react'
import './App.css'
import ClockList from './components/ClockList'

class App extends React.Component{
  render(){
    const arr = [1,2,3]
    return (
      <>
       <ClockList elements = {arr}/>
      </>
    )
  }
}

export default App
