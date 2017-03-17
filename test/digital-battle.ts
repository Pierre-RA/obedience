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
        {type: 1, power: 1},
        {type: 2, power: 1}))
        .to.be.above(0);
    });
    it('should be below 0', () => {
      expect(DigitalBattle.digital(
        {type: 1, power: 1},
        {type: 5, power: 1}))
        .to.be.below(0);
    });
    it('should be equal to 0', () => {
      expect(DigitalBattle.digital(
        {type: 1, power: 1},
        {type: 1, power: 1}))
        .to.equal(0);
    });
  });

  describe('static function Solve', () => {
    it('should have property', () => {
      expect(DigitalBattle).to.have.property('solve');
    });
    it('should give draw', () => {
      expect(DigitalBattle.solve(
        {type: 1, power: 2},
        {type: 1, power: 2}))
        .to.equal('draw');
    });
    it('should give won', () => {
      expect(DigitalBattle.solve(
        {type: 1, power: 2},
        {type: 2, power: 2}))
        .to.equal('won');
    });
    it('should give lost', () => {
      expect(DigitalBattle.solve(
          {type: 1, power: 2},
          {type: 4, power: 2}))
          .to.equal('lost');
    });
  });
});
