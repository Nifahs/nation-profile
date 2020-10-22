import React from 'react';
import './Countries.css'
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Countries = (props) => {

    const { name, capital, flag } = props.country;

    let history = useHistory();

    function handleClick(countryName) {
        history.push(`/country/name/${countryName}`);
    }

    return (

        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Capital: {capital}
                </Card.Text>

                {/* <Button variant="primary"><Link to ='/country'>Click here</Link></Button> */}
                {/* <button onClick={()=> handleClick(name)}>Click for more</button> */}
                <Button onClick={()=> handleClick(name)} variant="danger">Click for more</Button>
                {/* <p> <Link to="/about">About</Link></p> */}
                {/* <a href="/country"><button>Click me</button></a> */}

            </Card.Body>
        </Card>


    );
};

export default Countries;