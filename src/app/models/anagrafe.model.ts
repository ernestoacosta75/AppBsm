import { AmbienteModel } from './ambiente.model';
import { ContestoModel } from './contesto.model';
import { CanaleModel } from './canale.model';
import { ServizioModel } from './servizio.model';
import { ReturnCodeModel } from './return-code.model';
export class Anagrafe {
    ambienti: Array<AmbienteModel> = [];
    contesti: Array<ContestoModel> = [];
    canali: Array<CanaleModel> = [];
    servizi: Array<ServizioModel> = [];
    returncodes: Array<ReturnCodeModel> = [];
}
