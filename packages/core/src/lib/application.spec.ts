import { Container } from 'inversify';

import { Application } from './application';
import { Stream } from './stream';

describe('Application', () => {
  it('should create Inversify container', () => {
    const app = new Application();
    expectTypeOf(app).toHaveProperty('container').toEqualTypeOf<Container>();
  });

  it('should create RxJS stream', () => {
    const app = new Application();
    expectTypeOf(app).toHaveProperty('stream').toEqualTypeOf<Stream>();
  });
});
