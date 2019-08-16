import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
// import { Card as SemanticCard } from 'semantic-ui-react'
import Card from './components/Card'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData]= useState([]);
  console.log('App1', data)
  // console.log('App Folks', data.results)

  useEffect(()=>{
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
    .then(res =>{
        setData(res.data.results)
    })
    .catch(err => console.log(err)); 

  }, [])
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
        
        {/* {data.map((person, i)=> <Card person={person} key={i}/>)} */}
        {/* <Card /> */}
        <div className="card">
        {data.map((person, i)=> {
          return <Card person={person} key={i}/>
          })}
          </div>
          {/* <Card /> */}
      
    </div>
  );
}

export default App;