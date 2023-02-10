import {
  extension,
  Extension,
  ExtensionConfigureFn,
  getExtensions,
} from './extension';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SpecConfig = { count?: number };

@extension('spec')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SpecExtension implements Extension {
  configure<SpecConfig>(fn: ExtensionConfigureFn<SpecConfig>) {
    fn({} as SpecConfig);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async load() {}
}

describe('Extension', () => {
  it('should register spec extension', () => {
    const extensions = getExtensions();
    expect(extensions).toHaveProperty('spec');
  });
});
