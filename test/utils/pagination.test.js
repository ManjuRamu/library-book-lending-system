import { BadRequest } from '../../src/exceptions/apiError';
import { getLimitOffset } from '../../src/utils/pagination.js';

describe('test pagination utils', () => {
  it('Should give proper paginate value', () => {
    const { start, end } = getLimitOffset(2, 10);
    expect(start).toBe(10);
    expect(end).toBe(20);
  });
  it('Should throw error for invalid data', () => {
    try {
      getLimitOffset(0, 10);
    } catch (error) {
      expect(error.message).toBe('pageNo must be greater than 1');
    }
  });
});
