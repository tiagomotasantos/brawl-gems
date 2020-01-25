import React from 'react';
import { shallow } from 'enzyme';
import FindPlayerPage from '../../components/FindPlayerPage';
import player from '../fixtures/player';
import * as BrawlContext from '../../context/brawl-context';
import * as Services from '../../services/player';

let history, wrapper, dispatch;

beforeEach(() => {
    dispatch = jest.fn();
    history = { push: jest.fn() };
    BrawlContext.default = React.createContext({ dispatch });
    wrapper = shallow(<FindPlayerPage history={history}/>);
});

test('should render FindPlayerPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call get player', (done) => {
    const preventDefault = jest.fn();
    const getPlayerPromise = new Promise((resolve) => (resolve(player)));
    Services.getPlayer = jest.fn().mockReturnValue(getPlayerPromise);

    wrapper.find('input').prop('onChange')({ target: { value: player.tag }});
    wrapper.find('form').prop('onSubmit')({ preventDefault });
    
    expect(Services.getPlayer).toHaveBeenLastCalledWith(player.tag);
    
    getPlayerPromise.then(() => {
        expect(dispatch).toHaveBeenLastCalledWith( { type: 'SET_PLAYER', player });
        expect(history.push).toHaveBeenLastCalledWith(`/players/${player.tag}`);
        done();
    });
});