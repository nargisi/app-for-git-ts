import {  ChangeEventHandler, KeyboardEventHandler } from 'react';
import '../Header/Header.css';

type Props = {
  onKeyDown: KeyboardEventHandler
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

function Header({ onKeyDown, value, onChange } : Props) {
  return (
    <header className="header__container">
      <div className="header__logo"></div>
      <div className="header__searchform">
        <div className="header__searchform-icon"></div>
        <input
          className="header__searchform-input"
          type="text"
          placeholder="Enter GitHub username"
          onKeyDown={onKeyDown}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </header>
  );
}

export default Header;
