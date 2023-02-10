import { StageExtension, StageConfig } from './stage';

describe('StageExtension', () => {
  it('should be able to configure with StageConfig', () => {
    const extension = new StageExtension();

    extension.configure((config: StageConfig) => {
      config.app = { backgroundColor: '000' };
    });

    expect(extension.config.app).toHaveProperty('backgroundColor', '000');
  });
});
