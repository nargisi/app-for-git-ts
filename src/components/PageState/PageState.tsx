import React from 'react';
import '../PageState/PageState.css';

type Props = {
  icon: string;
  description: string;
  title: string;
}

function PageState(props : Props) {
  return (
    <>
      <div className="page-state__wrapper">
        <img
          className="page-state__icon"
          src={props.icon}
          alt={props.description}
        />
        <h1 className="page-state__title">{props.title}</h1>
      </div>
    </>
  );
}

export default PageState;
