import React from 'react';
import { shallow } from 'enzyme';
import BrawlClan from '../../components/BrawlClan';
import player from '../fixtures/player';

test('should render BrawlClan', () => {
    const wrapper = shallow(<BrawlClan 
        value={player.club.name} 
        icon={player.club.badgeUrl} 
    />);
    expect(wrapper).toMatchSnapshot();
});