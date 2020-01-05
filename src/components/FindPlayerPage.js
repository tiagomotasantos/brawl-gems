import React, { useState } from 'react';
import { getPlayer } from '../services/player';

const FindPlayerPage = () => {
    const [tag, setTag] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        getPlayer(tag).then(res => console.log(res));

        //setTag('');
    }

    return (    
        <div className="content-container find-player__content">
            <img alt="Brawl Stars" src="/images/full_logo.png" className="find-player__logo"></img>
            <h3 className="find-player__title">Player Analysis</h3>
            <form onSubmit={onSubmit} className="find-player__form">
                <div className="find-player__hashtag">#</div>
                <input
                    className="input"
                    type="text"
                    value={tag}
                    placeholder="Player tag"
                    autoFocus
                    onChange={(e) => setTag(e.target.value)}
                />
                <button className="find-player__button">
                    <img alt="Search" src="/images/search.png" />
                </button>
            </form>
        </div>
    );
};

export default FindPlayerPage;