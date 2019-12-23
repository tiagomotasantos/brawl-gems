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
        <div>
            <div>Find player by tag</div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value={tag}
                    placeholder="Player tag"
                    autoFocus
                    onChange={(e) => setTag(e.target.value)}
                />
                <button>Find</button>
            </form>
        </div>
    );
};

export default FindPlayerPage;