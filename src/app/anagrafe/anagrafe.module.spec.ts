import { AnagrafeModule } from './anagrafe.module';

describe('AnagrafeModule', () => {
  let anagrafeModule: AnagrafeModule;

  beforeEach(() => {
    anagrafeModule = new AnagrafeModule();
  });

  it('should create an instance', () => {
    expect(anagrafeModule).toBeTruthy();
  });
});
