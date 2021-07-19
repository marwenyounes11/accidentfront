import { Rubrique } from './rubrique';
import { Role } from './role';
import { Droit } from './droit';
import { SousRubrique } from './sousrubrique';
export class DroitRoles {
    id: number;
   droit: Droit;
   sousrubrique: SousRubrique;
   role: Role;
    
   
}
