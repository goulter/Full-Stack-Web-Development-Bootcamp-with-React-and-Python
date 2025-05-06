// create a react component
import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

// this is the functional component. Its a JS function that returns React elements.
const Welcome = () => (
    <Jumbotron>
        <h1>Hello, welcome to Image Search!</h1>
        <p>
            This is a simple application that searches for images and shows them here using the <a href="https://unsplash.com/">Unsplash API</a>.
        </p>
    </Jumbotron>
)
// export the component so it can be used in other files
export default Welcome;

