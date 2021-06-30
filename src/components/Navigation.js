import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                <h1>Accueil</h1> 
            </NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active">
                <h1>A propos</h1> 
            </NavLink>
        </div>
    );
};

export default Navigation;