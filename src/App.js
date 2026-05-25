import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div style={{ backgroundColor: '#0d0d1a', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#4a90d9', marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>
        ⚽ FIFA Player Cards
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
