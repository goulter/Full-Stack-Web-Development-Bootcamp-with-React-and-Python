import React from "react";
import { Card, Button } from "react-bootstrap";

//this is the functional component. Its a JS function that returns React elements.
const ImageCard = ({image}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image.urls.small} />
            <Card.Body>
                <Card.Title>{image.title.toUpperCase()}</Card.Title> 
                <Card.Text>
                    {image.description || image.alt_description }
                </Card.Text>
                <Button variant="primary">Delete</Button>
            </Card.Body>
        </Card>
    ); 
};

export default ImageCard;