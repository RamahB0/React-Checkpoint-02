import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
    color: '#e0e0e0',
    border: '2px solid #4a90d9'
  };

  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    objectPosition: 'top'
  };

  const nameStyle = {
    color: '#4a90d9',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  const badgeStyle = {
    backgroundColor: '#4a90d9',
    color: '#fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    position: 'absolute',
    top: '10px',
    right: '10px'
  };

  return (
    <Card style={cardStyle}>
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
        <div style={badgeStyle}>#{jerseyNumber}</div>
      </div>
      <Card.Body>
        <Card.Title style={nameStyle}>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://via.placeholder.com/200'
};

export default Player;
