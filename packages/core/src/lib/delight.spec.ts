import { Delight } from './delight';
import { Application } from './application';

describe('Delight', () => {
  it('should be singleton', () => {
    expectTypeOf(Delight).toHaveProperty('app').toEqualTypeOf<Application>();
  });
});
