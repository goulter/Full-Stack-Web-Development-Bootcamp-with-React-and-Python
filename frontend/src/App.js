import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';
import ImageCard from './components/imagecard';
import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log(images); 
  /*
  call it here instead and it will log every time the page (re)renders 
  and the state of the images array will have the updated value.
  it was also log when the state of the app component changes when we type the query with setWord onChange
  */ 

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    //the following api url is derived from
    //https://unsplash.com/documentation#location, https://unsplash.com/documentation#public-authentication, https://unsplash.com/documentation#get-a-random-photo
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`) //returns a promise that resolves to a Response object
      .then((res) => res.json()) //returns a promise that resolves to the parsed JSON data
      .then((unsplash_data) => { //handles the parsed JSON data
        setImages([{...unsplash_data, title:word}, ...images]) //update the existing images array with the new image as well as future search images. New at the front 
      })
      .catch((err) => { //handles and error from the fetch request or JSON parsing.
        console.log(err);
      })
      setWord('');
  }


  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
      {/* render the image card component and pass the first element of the images array as a prop if the images array has data */}
      {!!images.length && <ImageCard image={images[0]}/>} {/*the ImageCard component won't load if the images array is empty. !! converts number to boolean*/}
      {/*outer curly braces are for the entire js expression. 
        inner are neccessary because images[0] is also a js expression
        If images[0] was not {}'d it would be interprested as a literal string*/}
    </div>
  );
}

export default App;
