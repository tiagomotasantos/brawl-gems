import React from 'react';
import { shallow } from 'enzyme';
import PlayerPage from '../../components/PlayerPage';
import data from '../fixtures/player';
import * as BrawlContext from '../../context/brawl-context';

let wrapper;

beforeEach(() => {
    BrawlContext.default = React.createContext({ state: { player: { data } } });
    wrapper = shallow(<PlayerPage />);
});

test('should render PlayerPage', () => {
    expect(wrapper).toMatchSnapshot();
});