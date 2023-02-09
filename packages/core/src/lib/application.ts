import { Container } from 'inversify';
import { Stream } from './stream';

export class Application {
  public readonly container: Container = new Container();
  public readonly stream: Stream = new Stream();
}
