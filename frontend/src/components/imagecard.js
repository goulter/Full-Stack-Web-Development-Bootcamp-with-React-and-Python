import React from "react";
import { Card, Button } from "react-bootstrap";

//this is the functional component. Its a JS function that returns React elements.
const ImageCard = ({image}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image.urls.small} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ); 
};

export default ImageCard;