import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAccidentComponent } from './components/gestionaccident/gestionaccident.component';

import { GestionAccidentInformComponent } from './components/gestionaccidentinform/gestionaccidentinform.component';
import { GestionAccidentTransportComponent } from './components/gestionaccidenttransport/gestionaccidenttransport.component';
import { GestionAgentComponent } from './components/gestionagent/gestionagent.component';
import { GestionAgentTranstuComponent } from './components/gestionagenttranstu/gestionagenttranstu.component';
import { GestionAmbulancierComponent } from './components/gestionambulancier/gestionambulancier.component';
import { GestionDegatComponent } from './components/gestiondegat/gestiondegat.component';
import { GestionDegatTransportComponent } from './components/gestiondegattransport/gestiondegattransport.component';
import { GestionDegatVictimeComponent } from './components/gestiondegatvictime/gestiondegatvictime.component';
import { GestionDepartementComponent } from './components/gestiondepartement/gestiondepartement.component';
import { GestionDepotComponent } from './components/gestiondepot/gestiondepot.component';
import { GestionDistrictComponent } from './components/gestiondistrict/gestiondistrict.component';
import { GestionHuissierComponent } from './components/gestionhuissier/gestionhuissier.component';
import { GestionLieuxAccidentComponent } from './components/gestionlieuxaccident/gestionlieuxaccident.component';
import { GestionLigneComponent } from './components/gestionligne/gestionligne.component';
import { GestionMoyenTransportComponent } from './components/gestionmoyentransport/gestionmoyentransport.component';
import { GestionSecuriteComponent } from './components/gestionsecurite/gestionsecurite.component';
import { GestionSourceDeclareHuissierComponent } from './components/gestionsourcedeclarehuissier/gestionsourcedeclarehuissier.component';
import { GestionSourceInfoComponent } from './components/gestionsourceinfo/gestionsourceinfo.component';
import { GestionVictimeComponent } from './components/gestionvictime/gestionvictime.component';
import { NotificationAccidentComponent } from './components/notificationaccident/notificationaccident.component';




const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Parametre'
    },
    children: [
      {
        path: 'gestionaccident',
        component:  GestionAccidentComponent,
        data: {
          title: 'gestionaccident'
        }
      },
     
     
      {
        path: 'gestionmoyentransport',
        component:  GestionMoyenTransportComponent,
        data: {
          title: 'gestionmoyentransport'
        }
      },
      {
        path: 'gestiondegat',
        component:  GestionDegatComponent,
        data: {
          title: 'gestiondegat'
        }
      },
      {
        path: 'gestionaccidentinform',
        component:GestionAccidentInformComponent,
        data: {
          title: 'gestionaccidentinform'
        }
      }, 
      {
        path: 'addaccidentinform',
        component:  GestionAccidentInformComponent,
        data: {
          title: 'addaccidentinform'
        }
      },
      {
        path: 'editaccidentinform/:id/edit',
        component:  GestionAccidentInformComponent,
        data: {
          title: 'editaccidentinform'
        }
      },
      {
        path: 'gestionaccidenttransport',
        component:GestionAccidentTransportComponent,
        data: {
          title: 'gestionaccidenttransport'
        }
      }, 
      {
        path: 'addaccidenttransport',
        component:  GestionAccidentTransportComponent,
        data: {
          title: 'addaccidenttransport'
        }
      },
      {
        path: 'editaccidenttransport/:id/edit',
        component:  GestionAccidentTransportComponent,
        data: {
          title: 'editaccidenttransport'
        }
      },
      {
        path: 'gestionagent',
        component:GestionAgentComponent,
        data: {
          title: 'gestionagent'
        }
      }, 
      {
        path: 'addagent',
        component:  GestionAgentComponent,
        data: {
          title: 'addagent'
        }
      },
      {
        path: 'editagent/:id/edit',
        component:  GestionAgentComponent,
        data: {
          title: 'editagent'
        }
      },
      {
        path: 'gestiondegattransport',
        component:GestionDegatTransportComponent,
        data: {
          title: 'gestiondegattransport'
        }
      }, 
      {
        path: 'adddegattransport',
        component:  GestionDegatTransportComponent,
        data: {
          title: 'adddegattransport'
        }
      },
      {
        path: 'editdegattransport/:id/edit',
        component:  GestionDegatTransportComponent,
        data: {
          title: 'editdegattransport'
        }
      },
      {
        path: 'gestiondegatvictime',
        component:GestionDegatVictimeComponent,
        data: {
          title: 'gestiondegatvictime'
        }
      }, 
      {
        path: 'adddegatvictime',
        component:  GestionDegatVictimeComponent,
        data: {
          title: 'adddegatvictime'
        }
      },
      {
        path: 'editdegatvictime/:id/edit',
        component:  GestionDegatVictimeComponent,
        data: {
          title: 'editdegatvictime'
        }
      },
      {
        path: 'gestionagenttranstu',
        component:GestionAgentTranstuComponent,
        data: {
          title: 'gestionagenttranstu'
        }
      }, 
      {
        path: 'addagenttranstu',
        component:  GestionAgentTranstuComponent,
        data: {
          title: 'addagenttranstu'
        }
      },
      {
        path: 'editagenttranstu/:id/edit',
        component:  GestionAgentTranstuComponent,
        data: {
          title: 'editagenttranstu'
        }
      },
      {
        path: 'gestionambulancier',
        component:GestionAmbulancierComponent,
        data: {
          title: 'gestionambulancier'
        }
      }, 
      {
        path: 'addambulancier',
        component:  GestionAmbulancierComponent,
        data: {
          title: 'addambulancier'
        }
      },
      {
        path: 'editambulancier/:id/edit',
        component:  GestionAmbulancierComponent,
        data: {
          title: 'editambulancier'
        }
      },
      {
        path: 'gestiondepartement',
        component:GestionDepartementComponent,
        data: {
          title: 'gestiondepartement'
        }
      }, 
      {
        path: 'adddepartement',
        component:  GestionDepartementComponent,
        data: {
          title: 'adddepartement'
        }
      },
      {
        path: 'editdepartement/:id/edit',
        component:  GestionDepartementComponent,
        data: {
          title: 'editdepartement'
        }
      },
      {
        path: 'gestiondepot',
        component:GestionDepotComponent,
        data: {
          title: 'gestiondepot'
        }
      }, 
      {
        path: 'adddepot',
        component:  GestionDepotComponent,
        data: {
          title: 'adddepot'
        }
      },
      {
        path: 'editdepot/:id/edit',
        component:  GestionDepotComponent,
        data: {
          title: 'editdepot'
        }
      },
      {
        path: 'gestiondistrict',
        component:GestionDistrictComponent,
        data: {
          title: 'gestiondistrict'
        }
      }, 
      {
        path: 'adddistrict',
        component:  GestionDistrictComponent,
        data: {
          title: 'adddistrict'
        }
      },
      {
        path: 'editdistrict/:id/edit',
        component:  GestionDistrictComponent,
        data: {
          title: 'editdistrict'
        }
      },
      {
        path: 'gestionhuissier',
        component:GestionHuissierComponent,
        data: {
          title: 'gestionhuissier'
        }
      }, 
      {
        path: 'addhuissier',
        component:  GestionHuissierComponent,
        data: {
          title: 'addhuissier'
        }
      },
      {
        path: 'edithuissier/:id/edit',
        component:  GestionHuissierComponent,
        data: {
          title: 'edithuissier'
        }
      },
      {
        path: 'gestionlieuxaccident',
        component:GestionLieuxAccidentComponent,
        data: {
          title: 'gestionlieuxaccident'
        }
      }, 
      {
        path: 'addlieuxaccident',
        component:  GestionLieuxAccidentComponent,
        data: {
          title: 'addlieuxaccident'
        }
      },
      {
        path: 'editlieuxaccident/:id/edit',
        component:  GestionLieuxAccidentComponent,
        data: {
          title: 'editlieuxaccident'
        }
      },
      {
        path: 'gestionligne',
        component:GestionLigneComponent,
        data: {
          title: 'gestionligne'
        }
      }, 
      {
        path: 'addligne',
        component:  GestionLigneComponent,
        data: {
          title: 'addligne'
        }
      },
      {
        path: 'editligne/:id/edit',
        component:  GestionLigneComponent,
        data: {
          title: 'editligne'
        }
      },
      {
        path: 'gestionsecurite',
        component:GestionSecuriteComponent,
        data: {
          title: 'gestionsecurite'
        }
      }, 
      {
        path: 'addsecurite',
        component:  GestionSecuriteComponent,
        data: {
          title: 'addsecurite'
        }
      },
      {
        path: 'editsecurite/:id/edit',
        component:  GestionSecuriteComponent,
        data: {
          title: 'editsecurite'
        }
      },
      {
        path: 'gestionsourcedeclarehuissier',
        component:GestionSourceDeclareHuissierComponent,
        data: {
          title: 'gestionsourcedeclarehuissier'
        }
      }, 
      {
        path: 'addsourcedeclarehuissier',
        component:  GestionSourceDeclareHuissierComponent,
        data: {
          title: 'addsourcedeclarehuissier'
        }
      },
      {
        path: 'editsourcedeclarehuissier/:id/edit',
        component:  GestionSourceDeclareHuissierComponent,
        data: {
          title: 'editsourcedeclarehuissier'
        }
      },
      {
        path: 'gestionsourceinfo',
        component:GestionSourceInfoComponent,
        data: {
          title: 'gestionsourceinfo'
        }
      }, 
      {
        path: 'addsourceinfo',
        component:  GestionSourceInfoComponent,
        data: {
          title: 'addsourceinfo'
        }
      },
      {
        path: 'editsourceinfo/:id/edit',
        component:  GestionSourceInfoComponent,
        data: {
          title: 'editsourceinfo'
        }
      },
      {
        path: 'gestionvictime',
        component:GestionVictimeComponent,
        data: {
          title: 'gestionvictime'
        }
      }, 
      {
        path: 'addvictime',
        component:  GestionVictimeComponent,
        data: {
          title: 'addvictime'
        }
      },
      {
        path: 'editvictime/:id/edit',
        component:  GestionVictimeComponent,
        data: {
          title: 'editvictime'
        }
      },
     
     
    
      {
        path: 'notificationaccident',
        component:NotificationAccidentComponent,
        data: {
          title: 'notificationaccident'
        }
      }, 
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule {}
