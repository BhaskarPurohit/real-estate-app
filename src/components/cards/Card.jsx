import React from 'react';

const cardsData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'image1.jpg',
  },
  // Repeat the structure for each card...

  {
    id: 8,
    title: 'Card 8',
    description: 'Description for Card 8',
    image: 'image8.jpg',
  },
];

const Card = ({ id, title, description, image }) => (
  <div style={styles.card}>
    <img src={image} alt={title} style={styles.image} />
    <h3 style={styles.title}>{title}</h3>
    <p style={styles.description}>{description}</p>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  title: {
    fontSize: '18px',
    marginTop: '8px',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
};

const CardList = () => {
    return (
  <div style={styles.cardList}>
    {cardsData.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
    )
    };

const App = () => <CardList />;

export default App;
