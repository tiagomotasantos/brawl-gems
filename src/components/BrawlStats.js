import React from 'react';

const BrawlStats = ({ label, icon, value}) => (
    <div className="brawl-stats">
        <img alt={label} src={icon} className="brawl-stats__icon" />
        <span className="brawl-stats__label">{ label }</span>
        <span className="brawl-stats__value">{ value }</span>
    </div>
);

export default BrawlStats;