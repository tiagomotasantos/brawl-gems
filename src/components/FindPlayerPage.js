import React, { useContext, useState } from 'react';
import BrawlContext from '../context/brawl-context';
import { getPlayer } from '../services/player';
import { setPlayer } from '../actions/brawl';

const FindPlayerPage = (props) => {
    const { dispatch } = useContext(BrawlContext);
    const [tag, setTag] = useState('');
    const [loading, setLoading] = useState(true);
    const onSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        getPlayer(tag).then(res => {
            dispatch(setPlayer(res));
            props.history.push(`/players/${tag}`);
        })
        .catch(() => setLoading(false));
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
                    { !loading && <img alt="Search" src="/images/search.png" /> }
                    { loading && <div className="find-player__button--loading"></div> }
                </button>
            </form>
        </div>
    );
};

export default FindPlayerPage;