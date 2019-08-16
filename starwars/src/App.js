import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card'
import { Container } from 'semantic-ui-react';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData]= useState([]);
  console.log('App1', data)
  

  useEffect(()=>{
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
    .then(res =>{
        setData(res.data.results)
        console.log(res.data.results)
    })
    .catch(err => console.log(err)); 

  }, [])
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    
        <Container className="container-cards">
        {data.map((person)=> {
          return (
            
          <Card person={person}/>
          
          )
          })}
          </Container>
          {/* </div> */}
          {/* <Card /> */}
      
    </div>
  );
}

export default App;