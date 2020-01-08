import React, { useContext } from 'react';
import BrawlContext from '../context/brawl-context';

const PlayerPage = () => {
    const state = useContext(BrawlContext)

    return (    
        <div className="content-container">
            <div>Player Page</div>
        </div>
    );
};

export default PlayerPage;