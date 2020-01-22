import React, { useContext, useState } from 'react';
import BrawlContext from '../context/brawl-context';
import { getPlayer } from '../services/player';
import { setPlayer } from '../actions/brawl';

const FindPlayerPage = (props) => {
    const { dispatch } = useContext(BrawlContext);
    const [tag, setTag] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        getPlayer(tag).then(res => {
            dispatch(setPlayer(res));
            props.history.push(`/players/${tag}`);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        });
    }

    return (    
        <div className="content-container find-player__content">
            <img alt="Brawl Stars" src="/images/full_logo.png" className="find-player__logo"></img>
            <h3 className="find-player__title">Player Analysis</h3>
            { error && <p className="find-player__error">Invalid player tag</p> }
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
                <button className={loading ? "find-player__button find-player__button--loading" : "find-player__button"}>
                    { !loading && <img alt="Search" src="/images/search.png" /> }
                    { loading && <div className="find-player__button-loader"></div> }
                </button>
            </form>
        </div>
    );
};

export default FindPlayerPage;