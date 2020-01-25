import { setPlayer } from '../../actions/brawl';
import player from '../fixtures/player';

test('should setup set player action object', () => {
    const action = setPlayer(player);
    expect(action).toEqual({
        type: 'SET_PLAYER',
        player
    });
});
