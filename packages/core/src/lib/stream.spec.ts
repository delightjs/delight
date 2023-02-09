import { Stream } from './stream';

const MoveEvent = Symbol('MoveEvent');
type MovePayload = {
  x: number;
  y: number;
};

describe('Stream', () => {
  it('should be able to publish event', () => {
    const stream = new Stream();
    expect(() =>
      stream.publish<MovePayload>(MoveEvent, { x: 0, y: 0 })
    ).not.toThrowError();
  });

  it('should be able to subscribe event', async () => {
    const stream = new Stream();
    stream.subscribe(MoveEvent, (payload: MovePayload) => {
      expect(payload.x).toBe(0);
      expect(payload.y).toBe(1);
    });
    stream.publish<MovePayload>(MoveEvent, { x: 0, y: 1 });
  });
});
