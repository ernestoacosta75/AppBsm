import { AmministrazioneModule } from './amministrazione.module';

describe('AmministrazioneModule', () => {
  let amministrazioneModule: AmministrazioneModule;

  beforeEach(() => {
    amministrazioneModule = new AmministrazioneModule();
  });

  it('should create an instance', () => {
    expect(amministrazioneModule).toBeTruthy();
  });
});
