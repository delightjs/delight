import { Container } from 'inversify';
import 'reflect-metadata';

import { Stream } from './stream';
import { getExtensions, Extension, ExtensionConfigureFn } from './extension';

export class Application {
  public readonly container: Container = new Container();
  public readonly stream: Stream = new Stream();

  private readonly extensions: { [key: string]: Extension } = {};

  configureFor<T>(extensionName: string, fn: ExtensionConfigureFn<T>) {
    this.extensions[extensionName].configure(fn);
  }

  initialize() {
    const extensions = getExtensions();
    for (const key in extensions) {
      const extension = extensions[key];
      this.extensions[key] = new extension();
    }
  }

  async start() {
    const extensions = Object.values(this.extensions).map((extension) =>
      extension.load()
    );
    await Promise.all(extensions);
  }
}
