import JobCharacter from '../app/job-character';
import { expect } from 'chai';

describe('class Character', () => {
  describe('toString', () => {
    it('expect to have property', () => {
      expect(JobCharacter).to.have.property('toString');
    });
    it('expect to be a random character', () => {
      let character = new JobCharacter();
      expect(character).to.have.property('type');
      expect(character).to.have.property('power');
      expect(character).to.have.property('job');
    });
    it('expect to be a defined character', () => {
      let character = new JobCharacter(1,1,1);
      expect(character).to.have.property('type');
      expect(character).to.have.property('power');
      expect(character).to.have.property('job');
      expect(character.toString()).to.equal('Black   1');
      character = new JobCharacter(2,1,1);
      expect(character.toString()).to.equal('Yellow  1');
      character = new JobCharacter(3,1,1);
      expect(character.toString()).to.equal('Red     1');
      character = new JobCharacter(4,1,1);
      expect(character.toString()).to.equal('Green   1');
      character = new JobCharacter(5,1,1);
      expect(character.toString()).to.equal('Blue    1');
    });
  });
});
