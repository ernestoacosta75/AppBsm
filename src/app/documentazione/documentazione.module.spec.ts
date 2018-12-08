import { DocumentazioneModule } from './documentazione.module';

describe('DocumentazioneModule', () => {
  let documentazioneModule: DocumentazioneModule;

  beforeEach(() => {
    documentazioneModule = new DocumentazioneModule();
  });

  it('should create an instance', () => {
    expect(documentazioneModule).toBeTruthy();
  });
});
