import { Application } from './application';
import { Container } from 'inversify';

describe('Application', () => {
  it('should create Inversify container', () => {
    const app = new Application();
    expectTypeOf(app).toHaveProperty('container').toEqualTypeOf<Container>();
  });
});
