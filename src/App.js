
import './App.css';
import JokeContainer from './jokecontainer';
import JokeButton from './jokebutton';
import Header from './header';
import { useEffect , useState} from 'react'




function App() {
  const [jokeArray, setJokeArray] = useState([]);
  async function getJoke() {
    // fetch the joke
    const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    });
    const response = await jokePromise;
    const jokeData = await response.json();
    
    
    console.log(jokeData.joke)
    setJokeArray([
      ...jokeArray,
      jokeData.joke
    ]);
    
  }
  useEffect(() => {

    getJoke();
  }, []);
  const [joke, setJoke] = useState("") 
  console.log('this is the joke in state?:', joke);

  return (
    <div className="App">
      
      <Header />
      <JokeButton getJoke={getJoke}/>
      <JokeContainer jokes={jokeArray}/>
    </div>
  );
}

export default App;
