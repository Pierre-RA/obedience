import Tools from './utils/tools';
import Character from './character';

export default class JobCharacter extends Character {
  protected job: number;

  constructor(type?: number, power?: number, job?: number) {
    super(type, job);
    this.job = job;
  }
}
