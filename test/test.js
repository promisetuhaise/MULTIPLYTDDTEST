//red

import { expect } from 'chai';
import multiply from '../multiply.js';

describe('Multiply Function Tests', function () {
  it('should return 1 when multiplying 1 by 1', function () {
    expect(multiply(1, 1)).to.equal(1);
  });
});



//test 2(green)
it('should return 4 when multiplying 2 by 2', function () {
  expect(multiply(2, 2)).to.equal(4);
});


