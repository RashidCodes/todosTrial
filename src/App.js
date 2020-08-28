import React, { useState, useEffect } from 'react';
import Card from './components/card'
import Inputs from './components/inputs'



function App() {
  const [todos, setTodos] = useState([])
  const [job, setJob] = useState('')
  const [day, setDay] = useState('')

  useEffect(() => {
    console.log("todos have changed")
  }, [todos])

  function handleClick(){
    setTodos([...todos, { job, day }])
    setJob('')
    setDay('')
  }

  return (
    <div>
      <Inputs 
      setJob={setJob} 
      setDay={setDay} 
      job={job} 
      day={day}
      handleClick={handleClick} />

      {
        todos.length !== 0 ? 
        todos.map(({job, day}) => (<Card job={job} day={day} />)) : 
        <p style={{textAlign: 'center', margin: '2rem'}}>There are no todos to display</p>
      }

    
    </div>
  );
}


export default App;
