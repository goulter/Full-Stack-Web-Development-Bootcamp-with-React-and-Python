import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';
import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
console.log(UNSPLASH_KEY);

const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    //the following api url is derived from
    //https://unsplash.com/documentation#location, https://unsplash.com/documentation#public-authentication, https://unsplash.com/documentation#get-a-random-photo
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`) //returns a promise that resolves to a Response object
      .then((res) => res.json()) //returns a promise that resolves to the parsed JSON data
      .then((unsplash_data) => { //handles the parsed JSON data
        console.log(unsplash_data);
      })
      .catch((err) => { //handles and error from the fetch request or JSON parsing.
        console.log(err);
      })
  }

 // console.log(process.env)

  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
