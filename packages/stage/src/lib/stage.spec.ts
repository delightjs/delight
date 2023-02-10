import { StageExtension } from './stage';
import { Config } from './config';

describe('StageExtension', () => {
  it('should be able to configure with StageConfig', () => {
    const extension = new StageExtension();

    extension.configure((config: Config) => {
      config.app = { backgroundColor: '000' };
    });

    expect(extension.config.app).toHaveProperty('backgroundColor', '000');
  });
});
