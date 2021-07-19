import  {Accident} from './accident'
import  {SourceInform} from './sourceinform'
export class AccidentInform {
    id: number;
    accident:Accident;
    sourceinform:SourceInform;
    dateInformation: String;
    heureInformation: String;
    description: String;
}
