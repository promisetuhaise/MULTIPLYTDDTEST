//red

import { expect } from 'chai';
import multiply from '../multiply.js';

describe('Multiply Function Tests', function () {
  it('should return 1 when multiplying 1 by 1', function () {
    expect(multiply(1, 1)).to.equal(1);
  });
});


