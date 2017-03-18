import Tools from './utils/tools';

export default class Character {
  protected type: number;
  protected power: number;

  constructor (type?: number, power?: number) {
    if (type) {
      this.type = type;
    } else {
      this.type = Tools.getRand(1,5);
    }
    if (power) {
      this.power = power;
    } else {
      this.power = Tools.getRand(3,5);
    }
  }

  getType() : number {
    return this.type;
  }

  getPower() : number {
    return this.power;
  }

  toString() : string {
    switch(this.type) {
      case 1:
        return 'Black   ' + this.power;
      case 2:
        return 'Yellow  ' + this.power;
      case 3:
        return 'Red     ' + this.power;
      case 4:
        return 'Green   ' + this.power;
      case 5:
        return 'Blue    ' + this.power;
    }
  }
}
