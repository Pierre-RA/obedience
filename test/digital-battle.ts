import Character from '../app/character';
import DigitalBattle from '../app/digital-battle';
import { expect } from 'chai';

describe('class Battle', () => {
  describe('static function digital', () => {
    it('should have property', () => {
      expect(DigitalBattle).to.have.property('digital');
    });
    it('should be above 0', () => {
      expect(DigitalBattle.digital(
        new Character(1, 1),
        new Character(2, 1)))
        .to.be.above(0);
    });
    it('should be below 0', () => {
      expect(DigitalBattle.digital(
        new Character(1, 1),
        new Character(5, 1)))
        .to.be.below(0);
    });
    it('should be equal to 0', () => {
      expect(DigitalBattle.digital(
        new Character(1, 1),
        new Character(1, 1)))
        .to.equal(0);
    });
  });

  describe('static function Solve', () => {
    it('should have property', () => {
      expect(DigitalBattle).to.have.property('solve');
    });
    it('should give draw', () => {
      expect(DigitalBattle.solve(
        new Character(1, 2),
        new Character(1, 2)))
        .to.equal('draw');
    });
    it('should give won', () => {
      expect(DigitalBattle.solve(
        new Character(1, 2),
        new Character(2, 2)))
        .to.equal('won');
    });
    it('should give lost', () => {
      expect(DigitalBattle.solve(
        new Character(1, 2),
        new Character(4, 2)))
          .to.equal('lost');
    });
  });
});
