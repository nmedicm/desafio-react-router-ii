import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getPokemonDetails = async () => {
            const url = `${import.meta.env.VITE_URL}pokemon/${name}`;
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);

        };

        getPokemonDetails();
    }, [name]);
    
    if (!pokemon) {
        return <div>Pokemon not found</div>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className='details'>
                        <Card.Img
                            src={pokemon.sprites.front_default} 
                            alt={pokemon.name}
                            style={{width: '16rem'}}
                        />
                        <Card.Body>
                            <Card.Title className="text-capitalize">
                                <h3>{pokemon.name}</h3>
                            </Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>hp:</strong> {pokemon.stats[0].base_stat}</ListGroup.Item>
                                <ListGroup.Item><strong>attack:</strong> {pokemon.stats[1].base_stat}</ListGroup.Item>
                                <ListGroup.Item><strong>defense:</strong> {pokemon.stats[2].base_stat}</ListGroup.Item>
                                <ListGroup.Item><strong>special-attack:</strong> {pokemon.stats[3].base_stat}</ListGroup.Item>
                                <ListGroup.Item><strong>special-defense:</strong> {pokemon.stats[4].base_stat}</ListGroup.Item>
                                <ListGroup.Item><strong>speed:</strong> {pokemon.stats[5].base_stat}</ListGroup.Item>
                            </ListGroup>
                            <Card.Text className="text-capitalize mt-2">
                                {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PokemonDetail;