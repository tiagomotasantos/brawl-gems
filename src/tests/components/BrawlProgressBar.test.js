import React from 'react';
import { shallow } from 'enzyme';
import BrawlProgressBar from '../../components/BrawlProgressBar';
import player from '../fixtures/player';

test('should render BrawlProgressBar', () => {
    const wrapper = shallow(<BrawlProgressBar 
        value={player.expLevel} 
        icon="/images/level.png" 
        current={100} max={10000} color="#3EBEED"
    />);
    expect(wrapper).toMatchSnapshot();
});