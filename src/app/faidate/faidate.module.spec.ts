import { FaidateModule } from './faidate.module';

describe('FaidateModule', () => {
  let faidateModule: FaidateModule;

  beforeEach(() => {
    faidateModule = new FaidateModule();
  });

  it('should create an instance', () => {
    expect(faidateModule).toBeTruthy();
  });
});
