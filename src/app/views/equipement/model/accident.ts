import  {LieuxAccident} from './lieuxaccident'
import  {TypeAccident} from './typeaccident'
export class Accident {
    id: number;
    dateAccident: String;
    description: String;
    image: String;
    localisation:String;
    newLieux:String;
    lieux:LieuxAccident;
    typeaccident:TypeAccident;
}
