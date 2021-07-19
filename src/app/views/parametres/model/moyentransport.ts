import  {Ligne} from './ligne'
import  {Depot} from './depot'
export class MoyenTransport {
    id: number;
    gage: String;
    immatriculation: String;
    mark: String;
    model: String;
    numTransport: String;
    type: String;
    ligne: Ligne;
    depot: Depot;
}
