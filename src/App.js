import { useEffect, useState } from 'react';
import './App.css';
import Chuck from './Chuck_norris.jpg';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    joke: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    setState({
      ...state, 
      joke: result.data.value
    })
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="title">Chuck Norris Api</h1>
            <img src={Chuck} alt="Chuck Norris" />
          </div>

          <div className="col-6 searchJokeCol">
            <div className="card">
              <div className="card-header">
                Search for a word
              </div>
              <div className="card-body">
                <input type="text" />
              </div>
            </div>
            <div>
              <button className="btn btn-warning btn-lg">Generate Joke</button>
            </div>
          </div>

        </div>
        <h2 className="subTitle">Here is the joke</h2>
        <h4>{state.joke}</h4>
      </div>
    );
}

export default App;