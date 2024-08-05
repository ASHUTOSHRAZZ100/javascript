import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log("Error is ", error)
      })
  })
  

  return (
    <>
      <h1>Chain aur code</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => {
          // console.log(joke);
          return (<div key={joke.id}>
            <h3><b>Jokes</b>  {joke.type}</h3>
            <p><b>Jokes : </b>  {joke.setup}</p>
            <p> <b>Jokes punchline :</b>  {joke.punchline}</p>
          </div>)
        })
      }
    </>
  )
}

export default App
