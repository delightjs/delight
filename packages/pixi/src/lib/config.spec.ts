import { Config } from './config';
import { Scene } from './scene';

describe('Config', () => {
  it('should be able to add scene', () => {
    const config = new Config();
    const emptyScene = async () => new Scene();
    config.addScene('empty', emptyScene);

    expect(config.getScene('empty')).toMatchObject(emptyScene);
  });
});
