import { PrenotazioniModule } from './prenotazioni.module';

describe('PrenotazioniModule', () => {
  let prenotazioniModule: PrenotazioniModule;

  beforeEach(() => {
    prenotazioniModule = new PrenotazioniModule();
  });

  it('should create an instance', () => {
    expect(prenotazioniModule).toBeTruthy();
  });
});
