import Character from './character';
import Battle from './battle';

const delta = 0.3;

export default class DigitalBattle extends Battle {
  static digital(attacker: Character, defender: Character) : number {
    let color = this.color(attacker.getType(), defender.getType());
    if (color === 1) {
      return attacker.getPower() * (1 + delta) - defender.getPower();
    }
    if (color === -1) {
      return attacker.getPower() * (1 - delta) - defender.getPower();
    }
    return attacker.getPower() - defender.getPower();
  }

  static solve(attacker: Character, defender: Character) : string {
    let result = this.digital(attacker, defender);
    if (result > 0) {
      return 'won';
    }
    if (result < 0) {
      return 'lost';
    }
    return 'draw';
  }
}
