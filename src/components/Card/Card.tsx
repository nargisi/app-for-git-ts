import React from 'react';
import { Person } from '../Main/Main';
import './Card.css';

type Props = {
  person: Person
}

function Card({ person} : Props) {
  return (
    <div className="card__container">
      <img className="card__picture" src={person.avatar_url} alt="User" />
    </div>
  );
}

export default Card;
