import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimationPrixDegatParDateComponent } from './components/estimationprixdegatpardate/estimationprixdegatpardate.component';
import { EstimationPrixDegatParSousTypeAccidentComponent } from './components/estimationprixdegatparsoustypeaccident/estimationprixdegatparsoustypeaccident.component';
import { EstimationPrixDegatParTypeAccidentComponent } from './components/estimationprixdegatpartypeaccident/estimationprixdegatpartypeaccident.component';
import { NbrAccidentParDateComponent } from './components/nbraccidentpardate/nbraccidentpardate.component';
import { NbrAccidentParDistrictComponent } from './components/nbraccidentpardistrict/nbraccidentpardistrict.component';
import { NbrAccidentParMoyenTransportComponent } from './components/nbraccidentparmoyentransport/nbraccidentparmoyentransport.component';
import { NbrAccidentParSousTypeAccidentComponent } from './components/nbraccidentparsoustypeaccident/nbraccidentparsoustypeaccident.component';
import { NbrAccidentParTypeAccidentComponent } from './components/nbraccidentpartypeaccident/nbraccidentpartypeaccident.component';
import { NbrBlesserExterneComponent } from './components/nbrblesserexterne/nbrblesserexterne.component';
import { NbrBlesserInterneComponent } from './components/nbrblesserinterne/nbrblesserinterne.component';
import { NbrBlesserParNiveauBlessureComponent } from './components/nbrblesserparniveaublessure/nbrblesserparniveaublessure.component';
import { NbrMortsParDateComponent } from './components/nbrmortspardate/nbrmortspardate.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Statistiques'
    },
    children: [
      {
        path: 'nbrmortsdatestat',
        component:  NbrMortsParDateComponent,
        data: {
          title: 'Nombre Morts Par Date'
        }
      },
     
      {
        path: 'nbrblesserexternestat',
        component:  NbrBlesserExterneComponent,
        data: {
          title: 'Nombre Blesser Externe'
        }
      },

      {
        path: 'nbrblesserinternestat',
        component:  NbrBlesserInterneComponent,
        data: {
          title: 'Nombre Blesser Interne'
        }
      },

      {
        path: 'nbrblesserniveaustat',
        component:  NbrBlesserParNiveauBlessureComponent,
        data: {
          title: 'Nombre Blesser Par Niveau Blessure'
        }
      },

      {
        path: 'nbraccidentdatestat',
        component:  NbrAccidentParDateComponent,
        data: {
          title: 'Nombre Accident Par Date'
        }
      },
     
      {
        path: 'nbraccidentdistrictstat',
        component:  NbrAccidentParDistrictComponent,
        data: {
          title: 'Nombre Accident Par District'
        }
      },

      {
        path: 'nbraccidenttransportstat',
        component:  NbrAccidentParMoyenTransportComponent,
        data: {
          title: 'Nombre Accident Par MoyenTransport'
        }
      },

     

      {
        path: 'nbraccidenttypeaccidentstat',
        component:  NbrAccidentParTypeAccidentComponent,
        data: {
          title: 'Nombre Accident Par Type Accident'
        }
      },

      {
        path: 'nbraccidentstypeaccidentstat',
        component:  NbrAccidentParSousTypeAccidentComponent,
        data: {
          title: 'Nombre Accident Par Sous Type Accident'
        }
      },

      {
        path: 'degatdatestat',
        component:  EstimationPrixDegatParDateComponent,
        data: {
          title: 'Estimation Prix Degat Par Date'
        }
      },

      {
        path: 'degattypeaccidentstat',
        component:  EstimationPrixDegatParTypeAccidentComponent,
        data: {
          title: 'Estimation Prix Degat Par Type Accident'
        }
      },

      {
        path: 'degatstypeaccidentstat',
        component:  EstimationPrixDegatParSousTypeAccidentComponent,
        data: {
          title: 'Estimation Prix Degat Par Sous Type Accident'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquesRoutingModule {}
