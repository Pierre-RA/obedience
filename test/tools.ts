import Tools from '../app/utils/tools';
import { expect } from 'chai';

describe('class Utils/Tools', () => {
  describe('static getRand', () => {
    it('expect to have property', () => {
      expect(Tools).to.have.property('getRand');
    });
    it('expect to return proper range', () => {
      expect(Tools.getRand(0,5)).to.be.at.least(0);
      expect(Tools.getRand(0,5)).to.be.at.most(5);
    });
  });
});
