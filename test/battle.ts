import Character from '../app/character';
import Battle from '../app/battle';
import { expect } from 'chai';

describe('class Battle', () => {
  describe('static function color', () => {
    it('should have property', () => {
      expect(Battle).to.have.property('color');
    });
    it('should be equal to 1', () => {
      expect(Battle.color(1,2)).to.equal(1);
      expect(Battle.color(2,4)).to.equal(1);
      expect(Battle.color(3,5)).to.equal(1);
      expect(Battle.color(5,1)).to.equal(1);
      expect(Battle.color(4,0)).to.equal(1);
    });
    it('should be equal to -1', () => {
      expect(Battle.color(1,5)).to.equal(-1);
      expect(Battle.color(2,1)).to.equal(-1);
      expect(Battle.color(3,2)).to.equal(-1);
      expect(Battle.color(4,2)).to.equal(-1);
      expect(Battle.color(0,4)).to.equal(-1);
    });
    it('should be equal to 0', () => {
      expect(Battle.color(1,1)).to.equal(0);
      expect(Battle.color(2,2)).to.equal(0);
      expect(Battle.color(4,4)).to.equal(0);
      expect(Battle.color(0,0)).to.equal(0);
    });
  });

  describe('static function Solve', () => {
    it('should have property', () => {
      expect(Battle).to.have.property('solve');
    });
    it('should give draw', () => {
      expect(Battle.solve(
        {type: 1, power: 2},
        {type: 1, power: 2}))
        .to.equal('draw');
    });
    it('should give won', () => {
      expect(Battle.solve(
        {type: 1, power: 2},
        {type: 2, power: 2}))
        .to.equal('won');
    });
    it('should give lost', () => {
      expect(Battle.solve(
          {type: 1, power: 2},
          {type: 4, power: 2}))
          .to.equal('lost');
    });
  });
});
