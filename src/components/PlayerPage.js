import React, { useContext } from 'react';
import BrawlContext from '../context/brawl-context';
import BrawlStats from './BrawlStats';
import BrawlProgressBar from './BrawlProgressBar';
import BrawlClan from './BrawlClan';

const PlayerPage = () => {
    const { state } = useContext(BrawlContext);
    const { player: { data } } = state;
    const [current, max] = data.expFmt.split('/');

    return (    
        <div className="content-container">
            <div className="player-general-info">
                <div className="player-general-info__content">
                    <div className="player-general-info__image-tag">
                        <img alt={data.name} src={data.avatarUrl} className="player-general-info__image" />
                        <span className="player-general-info__tag">
                            #{data.tag}
                        </span>
                    </div>
                    <div className="player-general-info__col">
                        <span className="player-general-info__name">
                            {data.name}
                        </span>
                        <BrawlProgressBar 
                            value={data.expLevel} 
                            icon="/images/level.png" 
                            current={current} 
                            max={max} 
                            color="#3EBEED"
                        />
                        { data.hasClub && <BrawlClan icon={data.club.badgeUrl} value={data.club.name} /> }
                    </div>
                </div>
            </div>
            <div className="player-stats-container">
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Trophies"
                        icon="/images/trophy.png" 
                        value={data.trophies}
                    />
                    <BrawlStats 
                        label="Highest Trophies"
                        icon="/images/ranking.png" 
                        value={data.highestTrophies}
                    />
                </div>
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Solo Victories"
                        icon="/images/solo.png" 
                        value={data.soloShowdownVictories}
                    />
                    <BrawlStats 
                        label="3 vs 3 Victories"
                        icon="/images/3vs3.png" 
                        value={data.victories}
                    />
                </div>
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Duo Victories"
                        icon="/images/duo.png" 
                        value={data.duoShowdownVictories}
                    />
                    <BrawlStats 
                        label="Best Robo Rumble Time"
                        icon="/images/robo-rumble.png" 
                        value={data.bestRoboRumbleTime}
                    />
                </div>
                <div className="player-stats-container__row">
                    <BrawlStats 
                        label="Best Time as Big Brawler"
                        icon="/images/big-brawler.png" 
                        value={data.bestTimeAsBigBrawler}
                    />
                    <BrawlStats 
                        label="Highest Power Play"
                        icon="/images/power-play.png" 
                        value={data.highestPowerPlayPoints}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayerPage;