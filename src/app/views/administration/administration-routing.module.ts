import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionDroitComponent } from './components/gestiondroit/gestiondroit.component';
import { GestionDroitRolesComponent } from './components/gestiondroitroles/gestiondroitroles.component';
import { ProfileComponent } from './components/gestionprofile/profile/profile.component';
import { GestionRubriqueComponent } from './components/gestionrubrique/gestionrubrique.component';
import { GestionSousRubriqueComponent } from './components/gestionsousrubrique/gestionsousrubrique.component';
import { GestionUserComponent } from './components/gestionuser/gestionuser.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administration'
    },
    children: [
      {
        path: 'gestionuser',
        component:GestionUserComponent,
        data: {
          title: 'gestionuser'
        }
      }, 
      {
        path: 'adduser',
        component:  GestionUserComponent,
        data: {
          title: 'adduser'
        }
      },
      {
        path: 'edituser/:id/edit',
        component:  GestionUserComponent,
        data: {
          title: 'edituser'
        }
      },
      {
        path: 'gestionprofile',
        component:ProfileComponent,
        data: {
          title: 'gestionprofile'
        }
      }, 
      {
        path: 'gestiondroit',
        component:GestionDroitComponent,
        data: {
          title: 'gestiondroit'
        }
      }, 
      {
        path: 'adddroit',
        component:  GestionDroitComponent,
        data: {
          title: 'adddroit'
        }
      },
      {
        path: 'editdroit/:id/edit',
        component:  GestionDroitComponent,
        data: {
          title: 'editdroit'
        }
      },
      {
        path: 'gestionrubrique',
        component:GestionRubriqueComponent,
        data: {
          title: 'gestionrubrique'
        }
      }, 
      {
        path: 'addrubrique',
        component:  GestionRubriqueComponent,
        data: {
          title: 'addrubrique'
        }
      },
      {
        path: 'editrubrique/:id/edit',
        component:  GestionRubriqueComponent,
        data: {
          title: 'editrubrique'
        }
      },
      {
        path: 'gestionsousrubrique',
        component:GestionSousRubriqueComponent,
        data: {
          title: 'gestionsousrubrique'
        }
      }, 
      {
        path: 'addsousrubrique',
        component:  GestionSousRubriqueComponent,
        data: {
          title: 'addsousrubrique'
        }
      },
      {
        path: 'editsousrubrique/:id/edit',
        component:  GestionSousRubriqueComponent,
        data: {
          title: 'editsousrubrique'
        }
      },
      {
        path: 'gestiondroitroles',
        component:GestionDroitRolesComponent,
        data: {
          title: 'gestiondroitroles'
        }
      }, 
      {
        path: 'adddroitroles',
        component:  GestionDroitRolesComponent,
        data: {
          title: 'adddroitroles'
        }
      },
      {
        path: 'editdroitroles/:id/edit',
        component:  GestionDroitRolesComponent,
        data: {
          title: 'editdroitroles'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
