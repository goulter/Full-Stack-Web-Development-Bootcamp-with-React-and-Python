import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';
import ImageCard from './components/imagecard';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((image,index) => 
            (<Col key={index}><ImageCard image={image}/></Col>)
          )}
        </Row>
      </Container>
    </div>
  );
}

/* for each element in the images array, render an image card with the image data */
/* outer curly braces are for the entire js expression. inner are neccessary because {image} is also a js expression
  If {image} was not {}'d it would be interprested as a literal string
  */
/* to resolve the error about Each child in a list should have a unique "key" prop, use the index as unique. */
/* https://react-bootstrap-v4.netlify.app/layout/grid/#row-layout-col-sizing */
/* key was moved to Col bc Col is the direct child of map. React cares about each element in the list. Col is the element and the direct child */

export default App;
