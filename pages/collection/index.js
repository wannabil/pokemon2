import { useState } from 'react';
import Link from 'next/link';

const pokemonList = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Charmander' },
  { id: 3, name: 'Squirtle' },
  { id: 4, name: 'Pikachu' },
  { id: 5, name: 'Jigglypuff' },
  { id: 6, name: 'Meowth' },
  { id: 7, name: 'Psyduck' },
  { id: 8, name: 'Growlithe' },
  { id: 9, name: 'Poliwag' },
  { id: 10, name: 'Abra' },
];

const styles = {
  container: {
    padding: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
  },
  owned: {
    backgroundColor: '#FF0000', // Red
  },
  notOwned: {
    backgroundColor: '#808080', // Grey
    color: '#fff',
  },
  backButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default function Collection() {
  const [collection, setCollection] = useState(
    pokemonList.map(pokemon => ({ ...pokemon, owned: false }))
  );

  const toggleOwnership = (id) => {
    setCollection(prevCollection =>
      prevCollection.map(card =>
        card.id === id ? { ...card, owned: !card.owned } : card
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>Pokémon Card Collection</h1>
      <div style={styles.cardGrid}>
        {collection.map(card => (
          <div
            key={card.id}
            style={{
              ...styles.card,
              ...(card.owned ? styles.owned : styles.notOwned),
            }}
          >
            <h2>{card.name}</h2>
            <button onClick={() => toggleOwnership(card.id)}>
              {card.owned ? 'Remove from collection' : 'Add to collection'}
            </button>
          </div>
        ))}
      </div>
      <Link href="/">
        <button style={styles.backButton}>Back to Homepage</button>
      </Link>
    </div>
  );
}