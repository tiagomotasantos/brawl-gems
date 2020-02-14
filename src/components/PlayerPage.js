import React, { useContext, useState, useEffect } from 'react';
import BrawlContext from '../context/brawl-context';
import BrawlStats from './BrawlStats';
import BrawlProgressBar from './BrawlProgressBar';
import BrawlClan from './BrawlClan';

const PlayerPage = ({ history }) => {
    const { state } = useContext(BrawlContext);
    const [player, setPlayer] = useState();
    const [current, setCurrent] = useState();
    const [max, setMax] = useState();

    useEffect(() => {
        setupPlayer(state, setPlayer, setCurrent, setMax, history)
    }, []);

    return (    
        <div className="content-container">
            { player && <div className="player-general-info">
                <div className="player-general-info__content">
                    <div className="player-general-info__image-tag">
                        <img alt={player.name} src={player.avatarUrl} className="player-general-info__image" />
                        <span className="player-general-info__tag">
                            #{player.tag}
                        </span>
                    </div>
                    <div className="player-general-info__col">
                        <span className="player-general-info__name">
                            {player.name}
                        </span>
                        <BrawlProgressBar 
                            value={player.expLevel} 
                            icon="/images/level.png" 
                            current={current} 
                            max={max} 
                            color="#3EBEED"
                        />
                        { player.hasClub && <BrawlClan icon={player.club.badgeUrl} value={player.club.name} /> }
                    </div>
                </div>
            </div>}
            { player && <div className="player-stats-container">
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Trophies"
                        icon="/images/trophy.png" 
                        value={player.trophies}
                    />
                    <BrawlStats 
                        label="Highest Trophies"
                        icon="/images/ranking.png" 
                        value={player.highestTrophies}
                    />
                </div>
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Solo Victories"
                        icon="/images/solo.png" 
                        value={player.soloShowdownVictories}
                    />
                    <BrawlStats 
                        label="3 vs 3 Victories"
                        icon="/images/3vs3.png" 
                        value={player.victories}
                    />
                </div>
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Duo Victories"
                        icon="/images/duo.png" 
                        value={player.duoShowdownVictories}
                    />
                    <BrawlStats 
                        label="Best Robo Rumble Time"
                        icon="/images/robo-rumble.png" 
                        value={player.bestRoboRumbleTime}
                    />
                </div>
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Best Time as Big Brawler"
                        icon="/images/big-brawler.png" 
                        value={player.bestTimeAsBigBrawler}
                    />
                    <BrawlStats 
                        label="Highest Power Play"
                        icon="/images/power-play.png" 
                        value={player.highestPowerPlayPoints}
                    />
                </div>
            </div>}
        </div>
    );
};

const setupPlayer = (state, setPlayer, setCurrent, setMax, history) => {
    const player = state.player;

    if (player) {
        const [current, max] = player.data.expFmt.split('/');
        setCurrent(current);
        setMax(max);
        setPlayer(player.data);
    } else {
        history.push('/players');
    }
};

export default PlayerPage;