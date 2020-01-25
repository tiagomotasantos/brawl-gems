import React from 'react';
import { shallow } from 'enzyme';
import BrawlStats from '../../components/BrawlStats';
import player from '../fixtures/player';

test('should render BrawlStats', () => {
    const wrapper = shallow(<BrawlStats 
        label="Trophies"
        icon="/images/trophy.png" 
        value={player.trophies}
    />);
    expect(wrapper).toMatchSnapshot();
});