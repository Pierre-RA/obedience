import Character from '../app/character';
import { expect } from 'chai';

describe('class Character', () => {
  describe('toString', () => {
    it('expect to have property', () => {
      expect(Character).to.have.property('toString');
    });
    it('expect to be a random character', () => {
      let character = new Character();
      expect(character).to.have.property('type');
      expect(character).to.have.property('power');
    });
    it('expect to be a defined character', () => {
      let character = new Character(1,1);
      expect(character).to.have.property('type');
      expect(character).to.have.property('power');
      expect(character.toString()).to.equal('Black   1');
      character = new Character(2,1);
      expect(character.toString()).to.equal('Yellow  1');
      character = new Character(3,1);
      expect(character.toString()).to.equal('Red     1');
      character = new Character(4,1);
      expect(character.toString()).to.equal('Green   1');
      character = new Character(5,1);
      expect(character.toString()).to.equal('Blue    1');
    });
  });
});
