import React from 'react';
import Color from 'color';

const BrawlProgressBar = ({ value, icon, current, max, color }) => (
    <div className="progress-bar">
        <div 
            className="progress-bar__inner"
            style={{
                backgroundColor: color,
                borderBottom: '1.8rem solid ' + Color(color).darken(0.4),
                width: current * 100 / max
            }}
        >
        </div>
        <div className="progess-bar__values-container">
            <span className="progess-bar__values">{current}/{max}</span>
            <img alt="Adfsa" src={icon} className="progess-bar__icon" />
            <span className="progress-bar__value">{value}</span>
        </div>
    </div>
);

export default BrawlProgressBar;