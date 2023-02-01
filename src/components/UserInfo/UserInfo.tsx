import React from 'react';
import '../../components/UserInfo/UserInfo.css';
import { Person } from '../Main/Main';

type Props = {
  person: Person
}

function UserInfo({ person }: Props) {
  return (
    <div className="userInfo__container">
      <h2 className="userInfo__name">{person.name}</h2>
      <a
        className="userInfo__link"
        href={person.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="userInfo__nickname">{person.login}</h3>
      </a>
      <div className="userInfo__statistics">
        <span className="userInfo__statistic-icons"></span>
        <p className="userInfo__statistics-follow">
          {person.followers} followers
        </p>
        <span className="userInfo__statistic-icon"></span>
        <p className="userInfo__statistics-follow">
          {person.following} following
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
