import brawlReducer from '../../reducers/brawl';
import player from '../fixtures/player';
import { setPlayer } from '../../actions/brawl';

test('should set default state', () => {
    const state = brawlReducer(undefined, { type: '@@INIT' });
    expect(state).toBeUndefined();
});

test('should set player', () => {
    const state = brawlReducer(undefined, setPlayer(player));
    expect(state).toEqual({ player });
});