import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <Link className="header__title" to="/players">
            <h1>Players</h1>
        </Link>
    </header>
);
