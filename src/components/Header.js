import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="box header">
        <div className="content-container">
            <div className="header__content">
                <img className="header__image" alt="Logo" src="/images/logo.png" />
                <h1 className="header__title show-for-desktop">BRAWL GEMS</h1>
                <NavLink exact to="/players" className="header__link" activeClassName="header__link--selected">
                    <h1>PLAYERS</h1>
                </NavLink>
            </div>
        </div>
    </header>
);

export default Header;
