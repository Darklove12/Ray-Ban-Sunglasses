import React from 'react';
import Card from 'react-bootstrap/Card';
import '../components/CardBar.css'

function CardBar(props) {
  return (
    <card className="cardz">
      <Card.Img src= {props.image} />
      <card>
        <card>{props.name}</card>
      </card>
    </card>
  );
}

export default CardBar;