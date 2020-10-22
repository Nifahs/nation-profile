import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CountryProfile.css'

const CountryProfile = () => {

    let { countryName } = useParams();
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    const [country, setCountry] = useState([{}])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    const { name, capital,region, timezones, population, flag} = country[0];
    console.log(country);
    
    return (
        <Container>
            <Row>
                <Col> <img className='profilePic' src={flag} alt=""/></Col>
                <Col></Col>
                <Col className="Description">
                    <h4>{name}</h4>
                    <p><span className='allCategory'>Capital :</span>{capital}</p>
                    <p><span className='allCategory'>Region :</span>{region}</p>
                    <p><span className='allCategory'>Time Zone :</span>{timezones}</p>
                    <p><span className='allCategory'>Population :</span>{population}</p>
                   
                </Col>
            </Row>
        </Container>
    );
};

export default CountryProfile;