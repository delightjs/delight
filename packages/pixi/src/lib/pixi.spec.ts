import { PIXIExtension } from './pixi';
import { Config } from './config';

describe('PIXIExtension', () => {
  it('should be able to configure with PIXIConfig', () => {
    const extension = new PIXIExtension();

    extension.configure((config: Config) => {
      config.app = { backgroundColor: '000' };
    });

    expect(extension.config.app).toHaveProperty('backgroundColor', '000');
  });
});
