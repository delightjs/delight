import { Map } from 'immutable';

export type ExtensionConfigureFn<T> = (config: T) => void;
export interface Extension {
  configure<T>(fn: ExtensionConfigureFn<T>): void;
  load(): void;
  start(): void;
}
export type ExtensionCtor = new () => Extension;

let container: Map<string, ExtensionCtor> = Map<string, ExtensionCtor>();
export function extension(name: string) {
  return <T extends Extension>(target: new () => T): new () => T => {
    container = container.set(name, target);
    return target;
  };
}

export function getExtensions(): { [key: string]: ExtensionCtor } {
  return container.toObject();
}
