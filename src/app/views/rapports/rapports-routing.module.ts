import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimationPrixDegatParDateComponent } from './components/estimationprixdegatpardate/estimationprixdegatpardate.component';
import { EstimationPrixDegatParSousTypeAccidentComponent } from './components/estimationprixdegatparsoustypeaccident/estimationprixdegatparsoustypeaccident.component';
import { EstimationPrixDegatParTypeAccidentComponent } from './components/estimationprixdegatpartypeaccident/estimationprixdegatpartypeaccident.component';
import { EvaluationNbrAccidentComponent } from './components/evaluationnbraccident/evaluationnbraccident.component';
import { EvaluationNbrAccidentReseauxComponent } from './components/evaluationnbraccidentreseaux/evaluationnbraccidentreseaux.component';


import { IncidentJournalierReseauxComponent } from './components/incident-journalier-reseaux/incident-journalier-reseaux.component';
import { IncidentJournalierTravailComponent } from './components/incident-journalier-travail/incident-journalier-travail.component';
import { NbrAccidentParDateComponent } from './components/nbraccidentpardate/nbraccidentpardate.component';
import { NbrAccidentParDistrictComponent } from './components/nbraccidentpardistrict/nbraccidentpardistrict.component';
import { NbrAccidentParMoyenTransportComponent } from './components/nbraccidentparmoyentransport/nbraccidentparmoyentransport.component';
import { NbrAccidentParMoyenTransportDateComponent } from './components/nbraccidentparmoyentransportdate/nbraccidentparmoyentransportdate.component';
import { NbrAccidentParSousTypeAccidentComponent } from './components/nbraccidentparsoustypeaccident/nbraccidentparsoustypeaccident.component';
import { NbrAccidentParTypeAccidentComponent } from './components/nbraccidentpartypeaccident/nbraccidentpartypeaccident.component';
import { NbrBlesserExterneComponent } from './components/nbrblesserexterne/nbrblesserexterne.component';
import { NbrBlesserInterneComponent } from './components/nbrblesserinterne/nbrblesserinterne.component';
import { NbrBlesserParNiveauBlessureComponent } from './components/nbrblesserparniveaublessure/nbrblesserparniveaublessure.component';
import { NbrMortsParDateComponent } from './components/nbrmortspardate/nbrmortspardate.component';
import { RapportAccidentComponent } from './components/rapportaccident/rapportaccident.component';
import { RapportAccidentCollisionRouteBusComponent } from './components/rapportaccidentcollisionroutebus/rapportaccidentcollisionroutebus.component';
import { RapportAccidentCollisionRouteMetrosComponent } from './components/rapportaccidentcollisionroutemetros/rapportaccidentcollisionroutemetros.component';
import { RapportAccidentCollisionRouteTgmComponent } from './components/rapportaccidentcollisionroutetgm/rapportaccidentcollisionroutetgm.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rapports'
    },
    children: [
     
      {
        path: 'incidentjournalierreseaux',
        component:  IncidentJournalierReseauxComponent,
        data: {
          title: 'incident journalier reseaux'
        }
      },
      {
        path: 'incidentjournaliertravail',
        component:  IncidentJournalierTravailComponent,
        data: {
          title: 'incident journalier travail'
        }
      },
      {
        path: 'rapportaccident',
        component:  RapportAccidentComponent,
        data: {
          title: 'rapport accident'
        }
      },
      {
        path: 'rapportaccidentbus',
        component:  RapportAccidentCollisionRouteBusComponent,
        data: {
          title: 'rapport accident collision route bus'
        }
      },
      {
        path: 'rapportaccidentmetros',
        component:  RapportAccidentCollisionRouteMetrosComponent,
        data: {
          title: 'rapport accident collision route metros'
        }
      },
      {
        path: 'rapportaccidenttgm',
        component:  RapportAccidentCollisionRouteTgmComponent,
        data: {
          title: 'rapport accident collision route tgm'
        }
      },

      {
        path: 'degatdate',
        component:  EstimationPrixDegatParDateComponent,
        data: {
          title: 'Estimation Prix Degat Par Date'
        }
      },

      {
        path: 'degattypeaccident',
        component:  EstimationPrixDegatParTypeAccidentComponent,
        data: {
          title: 'Estimation Prix Degat Par Type Accident'
        }
      },

      {
        path: 'degatstypeaccident',
        component:  EstimationPrixDegatParSousTypeAccidentComponent,
        data: {
          title: 'Estimation Prix Degat Par Sous Type Accident'
        }
      },

      {
        path: 'nbraccidentdate',
        component: NbrAccidentParDateComponent,
        data: {
          title: 'Nombre Accident Par Date'
        }
      },

      {
        path: 'evaluationaccident',
        component: EvaluationNbrAccidentComponent,
        data: {
          title: 'Evaluation Nombre Accident '
        }
      },

      {
        path: 'evaluationaccidentreseaux',
        component: EvaluationNbrAccidentReseauxComponent,
        data: {
          title: 'Evaluation Nombre Accident par  réseaux'
        }
      },
   
      {
        path: 'nbraccidentdistrict',
        component: NbrAccidentParDistrictComponent,
        data: {
          title: 'Nombre Accident Par District'
        }
      },

      {
        path: 'nbraccidenttransport',
        component: NbrAccidentParMoyenTransportComponent,
        data: {
          title: 'Nombre Accident Par Moyen Transport'
        }
      },

      {
        path: 'nbraccidenttransportdate',
        component: NbrAccidentParMoyenTransportDateComponent,
        data: {
          title: 'Nombre Accident Par Moyen Transport Date'
        }
      },

      {
        path: 'nbraccidenttypeaccident',
        component: NbrAccidentParTypeAccidentComponent,
        data: {
          title: 'Nombre Accident Par  Type Accident'
        }
      },
     
      {
        path: 'nbraccidentstypeaccident',
        component: NbrAccidentParSousTypeAccidentComponent,
        data: {
          title: 'Nombre Accident Par Sous Type Accident'
        }
      },

      {
        path: 'nbrblesserexterne',
        component:  NbrBlesserExterneComponent,
        data: {
          title: 'Nombre Blesser Externe'
        }
      },

      {
        path: 'nbrblesserinterne',
        component:  NbrBlesserInterneComponent,
        data: {
          title: 'Nombre Blesser Interne'
        }
      },

      {
        path: 'nbrblesserniveaublessure',
        component:  NbrBlesserParNiveauBlessureComponent,
        data: {
          title: 'Nombre Blesser Par Niveau Blessure'
        }
      },

      {
        path: 'nbrmortspardate',
        component:  NbrMortsParDateComponent,
        data: {
          title: 'Nombre Morts Par Date'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportsRoutingModule {}
