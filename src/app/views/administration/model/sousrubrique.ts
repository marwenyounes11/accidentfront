
import { DroitRoles } from './droitroles';
import { Rubrique } from './rubrique';
export class SousRubrique {
    id: number;
    libelle: string;
    rubrique: Rubrique;
    droitroles: Array<DroitRoles>;
}
