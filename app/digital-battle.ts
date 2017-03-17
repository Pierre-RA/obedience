import Character from './character';
import Battle from './battle';

const delta = 0.3;

export default class DigitalBattle extends Battle {
  static digital(attacker: Character, defender: Character) : number {
    let color = this.color(attacker.type, defender.type);
    if (color === 1) {
      return attacker.power * (1 + delta) - defender.power;
    }
    if (color === -1) {
      return attacker.power * (1 - delta) - defender.power;
    }
    return attacker.power - defender.power;
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
