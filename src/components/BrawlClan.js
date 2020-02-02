import React from 'react';

const BrawlClan = ({ icon, value }) => (
    <div className="brawl-clan">
        <div className="brawl-clan__values-container">
            <span>{value}</span>
            <img alt="icon" src={icon} className="brawl-clan__icon" />
        </div>
    </div>
);

export default BrawlClan;