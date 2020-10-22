import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import { Card, div, Container, Row, Col } from 'react-bootstrap';
import './Home.css'

const Home = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div className="homeStyle">
            <h3>Home</h3>
            <h6>Total Countries = {country.length}</h6>
            <Container fluid>

                
                <Row>
                    <Col>{
                        country.map(country => <Countries country={country}></Countries>)
                    }</Col>
                    
                </Row>

            </Container>

        </div>
    );
};

export default Home;