import { DroitRoles } from './droitroles';
import { User } from './user';

export class Role {
    id: number;
    name: string;
    droitroles: Array<DroitRoles>;
    users: Array<User>;
}
