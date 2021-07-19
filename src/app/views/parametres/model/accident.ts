import { AccidentInform } from './accidentinform';
import { AccidentTransport } from './accidenttransport';
import { Degat } from './degat';
import { Huissier } from './huissier';
import  {LieuxAccident} from './lieuxaccident'
import  {TypeAccident} from './typeaccident'
export class Accident {
    id: number;
    type: string;
    dateAccident: string;
    heureAccident: string;
    description: string;
    image: string;
    subType: string;
    degats: Array<Degat>;
    lieux:LieuxAccident;
    huissiers: Array<Huissier>;
    accidentinforms: Array<AccidentInform>;
    accidenttransports: Array<AccidentTransport>;
   

}
