const assert = require('assert');

const withinOneYear = require('../index');


describe('within-one-year', () => {
  it('2017-01-01 + 1 year => 2018-01-01', () => {
    const from = new Date('2017-01-01T00:00:00.000Z');
    assert.strictEqual(withinOneYear(from, new Date('2018-01-01T00:00:00.000Z')), true);
    assert.strictEqual(withinOneYear(from, new Date('2018-01-01T00:00:00.001Z')), false);
  });

  describe('leap year', () => {
    it('2016-02-29 + 1 year => 2017-03-01', () => {
      const from = new Date('2016-02-29T00:00:00.000Z');
      assert.strictEqual(withinOneYear(from, new Date('2017-03-01T00:00:00.000Z')), true);
      assert.strictEqual(withinOneYear(from, new Date('2017-03-01T00:00:00.001Z')), false);
    });

    it('2015-03-01 + 1 year => 2016-03-01', () => {
      const from = new Date('2015-03-01T00:00:00.000Z');
      assert.strictEqual(withinOneYear(from, new Date('2016-03-01T00:00:00.000Z')), true);
      assert.strictEqual(withinOneYear(from, new Date('2016-03-01T00:00:00.001Z')), false);
    });

    it('2015-02-28 + 1 year => 2016-02-28', () => {
      const from = new Date('2015-02-28T00:00:00.000Z');
      assert.strictEqual(withinOneYear(from, new Date('2016-02-28T00:00:00.000Z')), true);
      assert.strictEqual(withinOneYear(from, new Date('2016-02-28T00:00:00.001Z')), false);
    });
  });
});
