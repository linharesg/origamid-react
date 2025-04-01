import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <>
      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: '18rem' }}
      >
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <div className="card-title">R$ 2500</div>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            facilis, officia eius, explicabo tenetur nostrum similique sapiente
            sequi omnis delectus ipsa neque. Iste placeat impedit ex aliquam
            dolore deleniti tempora.
          </p>
        </div>
      </div>
      <Card
        bg="dark"
        text="white"
        className="m-5"
        style={{ maxWidth: '18rem' }}
      >
        <Card.Header>Smartphone</Card.Header>
        <Card.Body>
          <Card.Title>R$ 3000</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            doloribus deleniti ratione minus mollitia inventore recusandae
            harum, saepe velit consectetur architecto omnis earum sed ex
            praesentium maiores. Aut, impedit reiciendis?
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default App;
