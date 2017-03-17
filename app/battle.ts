import Character from './character';

export default class Battle {
  static color(attacker: number, defender: number) : number {
    if (attacker === 0) {
      return defender === 0 ? 0 : -1;
    }
    if (defender === 0) {
      return 1;
    }
    let delta = attacker - defender;
    if (delta === 0) {
      return 0;
    }
    return (delta > 2 || (delta < 0 && delta > -3)) ? 1 : -1;
  }

  static solve(attacker: Character, defender: Character) : string {
    let result = this.color(attacker.type, defender.type);
    if (result > 0) {
      return 'won';
    }
    if (result < 0) {
      return 'lost';
    }
    return 'draw';
  }
}
