import { Game } from './game';
import { getGame } from '../app.component.spec';


describe('Game', () => {
  let game: Game;
  game = getGame();
  it('should be created', () => {
    expect(getGame()).toBeTruthy();
  });
});
