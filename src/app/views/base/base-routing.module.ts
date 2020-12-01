import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccidentInformComponent } from './components/accidentinform/accidentinform.component';
import { AddAccidentInformComponent } from './components/add-accidentinform/add-accidentinform.component';
import { AgentComponent } from './components/agent/agent.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { DegatMaterielComponent } from './components/degatmateriel/degatmateriel.component';
import { DepotComponent } from './components/depot/depot.component';
import { AddDepotComponent } from './components/add-depot/add-depot.component';
import { DistrictComponent } from './components/district/district.component';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { LigneComponent } from './components/ligne/ligne.component';
import { AddLigneComponent } from './components/add-ligne/add-ligne.component';
import { MoyenTransportComponent } from './components/moyentransport/moyentransport.component';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { SourceInfoComponent } from './components/sourceinfo/sourceinfo.component';
import { AddSourceInfoComponent } from './components/add-sourceinfo/add-sourceinfo.component';
import { SousTypeAccidentComponent } from './components/soustypeaccident/soustypeaccident.component';
import { AddSousTypeAccidentComponent } from './components/add-soustypeaccident/add-soustypeaccident.component';
import { TypeAccidentComponent } from './components/typeaccident/typeaccident.component';
import { AddTypeAccidentComponent } from './components/add-typeaccident/add-typeaccident.component';
import { LieuxAccidentComponent } from './components/lieuxaccident/lieuxaccident.component';
import { AddLieuxAccidentComponent } from './components/add-lieuxaccident/add-lieuxaccident.component';
import { AccidentTransportComponent } from './components/accidenttransport/accidenttransport.component';
import { AddAccidentTransportComponent } from './components/add-accidenttransport/add-accidenttransport.component';
import { AgentTransportComponent } from './components/agenttransport/agenttransport.component';
import { AddAgentTransportComponent } from './components/add-agenttransport/add-agenttransport.component';
import { IncidentJournalierBusComponent } from './components/incident-journalier-bus/incident-journalier-bus.component';
import { IncidentJournalierMetroComponent } from './components/incident-journalier-metro/incident-journalier-metro.component';
import { DegatPhysiqueComponent } from './components/degatphysique/degatphysique.component';
import { AddDegatMaterielComponent } from './components/add-degatmateriel/add-degatmateriel.component';
import { AddDegatPhysiqueComponent } from './components/add-degatphysique/add-degatphysique.component';
import { AddAccidentCollisionComponent } from './components/add-accidentcollision/add-accidentcollision.component';
import { AddAccidentTravailComponent } from './components/add-accidenttravail/add-accidenttravail.component';
import { AddAccidentRouteComponent } from './components/add-accidentroute/add-accidentroute.component';
import { AgentTranstuComponent } from './components/agenttranstu/agenttranstu.component';
import { AddAgentTranstuComponent } from './components/add-agenttranstu/add-agenttranstu.component';
import { AmbulancierComponent } from './components/ambulancier/ambulancier.component';
import { AddAmbulancierComponent } from './components/add-ambulancier/add-ambulancier.component';
import { SourceDeclareHuissierComponent } from './components/sourcedeclarehuissier/sourcedeclarehuissier.component';
import { AddSourceDeclareHuissierComponent } from './components/add-sourcedeclarehuissier/add-sourcedeclarehuissier.component';
import { HuissierComponent } from './components/huissier/huissier.component';
import { AddHuissierComponent } from './components/add-huissier/add-huissier.component';
import { SecuriteComponent } from './components/securite/securite.component';
import { AddSecuriteComponent } from './components/add-securite/add-securite.component';
import { RapportAccidentComponent } from './components/rapportaccident/rapportaccident.component';
import { RapportAccidentCollisionRouteBusComponent } from './components/rapportaccidentcollisionroutebus/rapportaccidentcollisionroutebus.component';
import { RapportAccidentCollisionRouteMetrosComponent } from './components/rapportaccidentcollisionroutemetros/rapportaccidentcollisionroutemetros.component';
import { DepartementComponent } from './components/departement/departement.component';
import { AddDepartementComponent } from './components/add-departement/add-departement.component';
import { MaterielComponent } from './components/materiel/materiel.component';
import { AddExtincteurComponent } from './components/add-extincteur/add-extincteur.component';
import { AddPoteauxIncendieComponent } from './components/add-poteauxincendie/add-poteauxincendie.component';
import { AddRobinetIncendieComponent } from './components/add-robinetincendie/add-robinetincendie.component';
import { AddBoucheIncendieComponent } from './components/add-boucheincendie/add-boucheincendie.component';
import { AgentInterventionComponent } from './components/agentintervention/agentintervention.component';
import { AddAgentInterventionComponent } from './components/add-agentintervention/add-agentintervention.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { AddInterventionComponent } from './components/add-intervention/add-intervention.component';
import { AccidentComponent } from './components/accident/accident.component';
import { AddMetroComponent } from './components/add-metro/add-metro.component';
import { AddTgmComponent } from './components/add-tgm/add-tgm.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'accidents',
        component:  AccidentComponent,
        data: {
          title: 'accidents'
        }
      },
      {
        path: 'accidentinforms',
        component:  AccidentInformComponent,
        data: {
          title: 'accidentinforms'
        }
      },
      {
        path: 'incidentjournalierbus',
        component:  IncidentJournalierBusComponent,
        data: {
          title: 'incidentjournalierbus'
        }
      },
      {
        path: 'incidentjournaliermetro',
        component:  IncidentJournalierMetroComponent,
        data: {
          title: 'incident journalier metro'
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
        path: 'rapportaccidentcollisionroutebus',
        component:  RapportAccidentCollisionRouteBusComponent,
        data: {
          title: 'rapport accident collision route bus'
        }
      },
      {
        path: 'rapportaccidentcollisionroutemetros',
        component:  RapportAccidentCollisionRouteMetrosComponent,
        data: {
          title: 'rapport accident collision route metros'
        }
      },
      {
        path: 'accidenttransports',
        component:  AccidentTransportComponent,
        data: {
          title: 'accidenttransports'
        }
      },
      {
        path: 'agenttransports',
        component:  AgentTransportComponent,
        data: {
          title: 'agenttransports'
        }
      },
      {
        path: 'addaccidenttravail',
        component:  AddAccidentTravailComponent,
        data: {
          title: 'addaccidenttravail'
        }
      },
      {
        path: 'addaccidentcollision',
        component:  AddAccidentCollisionComponent,
        data: {
          title: 'addaccidentcollision'
        }
      },
      {
        path: 'addaccidentroute',
        component:  AddAccidentRouteComponent,
        data: {
          title: 'addaccidentroute'
        }
      },
      {
        path: 'addaccidentinform',
        component:  AddAccidentInformComponent,
        data: {
          title: 'addaccidentinform'
        }
      },
      {
        path: 'addaccidenttransport',
        component:  AddAccidentTransportComponent,
        data: {
          title: 'addaccidenttransport'
        }
      },
      {
        path: 'addagenttransport',
        component:  AddAgentTransportComponent,
        data: {
          title: 'addagenttransport'
        }
      },
      {
        path: 'editaccidentinform/:id/edit',
        component:  AddAccidentInformComponent,
        data: {
          title: 'editaccidentinform'
        }
      },
       {
        path: 'editaccidenttransport/:id/edit',
        component:  AddAccidentTransportComponent,
        data: {
          title: 'editaccidenttransport'
        }
      },
      {
        path: 'editagenttransport/:id/edit',
        component:  AddAgentTransportComponent,
        data: {
          title: 'editagenttransport'
        }
      },
      {
        path: 'agents',
        component:  AgentComponent,
        data: {
          title: 'agents'
        }
      },
      {
        path: 'addagent',
        component:  AddAgentComponent,
        data: {
          title: 'addagent'
        }
      },
      {
        path: 'editagent/:id/edit',
        component:  AddAgentComponent,
        data: {
          title: 'editagent'
        }
      },
      {
        path: 'agentinterventions',
        component:  AgentInterventionComponent,
        data: {
          title: 'agentinterventions'
        }
      },
      {
        path: 'addagentintervention',
        component:  AddAgentInterventionComponent,
        data: {
          title: 'addagentintervention'
        }
      },
      {
        path: 'editagentintervention/:id/edit',
        component:  AddAgentInterventionComponent,
        data: {
          title: 'editagentintervention'
        }
      },
      {
        path: 'interventions',
        component:  InterventionComponent,
        data: {
          title: 'interventions'
        }
      },
      {
        path: 'addintervention',
        component:  AddInterventionComponent,
        data: {
          title: 'addintervention'
        }
      },
      {
        path: 'editintervention/:id/edit',
        component:  AddInterventionComponent,
        data: {
          title: 'editintervention'
        }
      },
      {
        path: 'agenttranstus',
        component:  AgentTranstuComponent,
        data: {
          title: 'agenttranstus'
        }
      },
      {
        path: 'addagenttranstu',
        component:  AddAgentTranstuComponent,
        data: {
          title: 'addagenttranstu'
        }
      },
      {
        path: 'editagenttranstu/:id/edit',
        component:  AddAgentTranstuComponent,
        data: {
          title: 'editagenttranstu'
        }
      },
      {
        path: 'ambulanciers',
        component:  AmbulancierComponent,
        data: {
          title: 'ambulanciers'
        }
      },
      {
        path: 'addambulancier',
        component:  AddAmbulancierComponent,
        data: {
          title: 'addambulancier'
        }
      },
      {
        path: 'editambulancier/:id/edit',
        component:  AddAmbulancierComponent,
        data: {
          title: 'editambulancier'
        }
      },
      {
        path: 'degatmateriels',
        component:  DegatMaterielComponent,
        data: {
          title: 'degatmateriels'
        }
      },
      {
        path: 'degatphysiques',
        component:  DegatPhysiqueComponent,
        data: {
          title: 'degatphysiques'
        }
      },
      {
        path: 'adddegatmateriel',
        component:  AddDegatMaterielComponent,
        data: {
          title: 'adddegatmateriel'
        }
      },
      {
        path: 'adddegatphysique',
        component:  AddDegatPhysiqueComponent,
        data: {
          title: 'adddegatphysique'
        }
      },
      {
        path: 'editdegatmateriel/:id/edit',
        component:  AddDegatMaterielComponent,
        data: {
          title: 'editdegatmateriel'
        }
      },
      {
        path: 'editdegatphysique/:id/edit',
        component:  AddDegatPhysiqueComponent,
        data: {
          title: 'editdegatphysique'
        }
      },
      {
        path: 'depots',
        component:  DepotComponent,
        data: {
          title: 'depots'
        }
      },
      {
        path: 'departements',
        component:  DepartementComponent,
        data: {
          title: 'departements'
        }
      },
      {
        path: 'adddepot',
        component:  AddDepotComponent,
        data: {
          title: 'adddepot'
        }
      },
      {
        path: 'adddepartement',
        component:  AddDepartementComponent,
        data: {
          title: 'adddepartement'
        }
      },
      {
        path: 'districts',
        component:  DistrictComponent,
        data: {
          title: 'districts'
        }
      },
      {
        path: 'adddistrict',
        component:  AddDistrictComponent,
        data: {
          title: 'adddistrict'
        }
      },
      {
        path: 'editdepot/:id/edit',
        component:  AddDepotComponent,
        data: {
          title: 'editdepot'
        }
      },
      {
        path: 'editdepartement/:id/edit',
        component:  AddDepartementComponent,
        data: {
          title: 'editdepartement'
        }
      },
      {
        path: 'editdistrict/:id/edit',
        component:  AddDistrictComponent,
        data: {
          title: 'editdistrict'
        }
      },
      {
        path: 'lieuxaccident',
        component:  LieuxAccidentComponent,
        data: {
          title: 'lieuxaccident'
        }
      },
      {
        path: 'addlieuxaccident',
        component:  AddLieuxAccidentComponent,
        data: {
          title: 'addlieuxaccident'
        }
      },
      {
        path: 'editlieuxaccident/:id/edit',
        component:  AddLieuxAccidentComponent,
        data: {
          title: 'editlieuxaccident'
        }
      },
      {
        path: 'lignes',
        component:  LigneComponent,
        data: {
          title: 'lignes'
        }
      },
      {
        path: 'addligne',
        component:  AddLigneComponent,
        data: {
          title: 'addligne'
        }
      },
      {
        path: 'editligne/:id/edit',
        component:  AddLigneComponent,
        data: {
          title: 'editligne'
        }
      },
      {
        path: 'moyentransports',
        component:  MoyenTransportComponent,
        data: {
          title: 'moyentransports'
        }
      },
      {
        path: 'addbus',
        component:  AddBusComponent,
        data: {
          title: 'addbus'
        }
      },
      {
        path: 'addmetro',
        component:  AddMetroComponent,
        data: {
          title: 'addmetro'
        }
      },
      {
        path: 'addtgm',
        component:  AddTgmComponent,
        data: {
          title: 'addtgm'
        }
      },
      {
        path: 'sourceinfos',
        component:  SourceInfoComponent,
        data: {
          title: 'sourceinfos'
        }
      },
      {
        path: 'addsourceinfo',
        component:  AddSourceInfoComponent,
        data: {
          title: 'addsourceinfo'
        }
      },
      {
        path: 'editsourceinfo/:id/edit',
        component:  AddSourceInfoComponent,
        data: {
          title: 'editsourceinfo'
        }
      },
      {
        path: 'securites',
        component:  SecuriteComponent,
        data: {
          title: 'securites'
        }
      },
      {
        path: 'addsecurite',
        component:  AddSecuriteComponent,
        data: {
          title: 'addsecurite'
        }
      },
      {
        path: 'editsecurite/:id/edit',
        component:  AddSecuriteComponent,
        data: {
          title: 'editsecurite'
        }
      },
      {
        path: 'sourcedeclarehuissiers',
        component:  SourceDeclareHuissierComponent,
        data: {
          title: 'sourcedeclarehuissiers'
        }
      },
      {
        path: 'addsourcedeclarehuissier',
        component:  AddSourceDeclareHuissierComponent,
        data: {
          title: 'addsourcedeclarehuissier'
        }
      },
      {
        path: 'editsourcedeclarehuissier/:id/edit',
        component:  AddSourceDeclareHuissierComponent,
        data: {
          title: 'editsourcedeclarehuissier'
        }
      },
      {
        path: 'huissiers',
        component:  HuissierComponent,
        data: {
          title: 'huissiers'
        }
      },
      {
        path: 'addhuissier',
        component:  AddHuissierComponent,
        data: {
          title: 'addhuissier'
        }
      },
      {
        path: 'edithuissier/:id/edit',
        component:  AddHuissierComponent,
        data: {
          title: 'edithuissier'
        }
      },
      {
        path: 'typeaccidents',
        component:  TypeAccidentComponent,
        data: {
          title: 'typeaccidents'
        }
      },
      {
        path: 'addtypeaccident',
        component:  AddTypeAccidentComponent,
        data: {
          title: 'addtypeaccident'
        }
      },
      {
        path: 'edittypeaccident/:id/edit',
        component:  AddTypeAccidentComponent,
        data: {
          title: 'edittypeaccident'
        }
      },
      {
        path: 'soustypeaccidents',
        component:  SousTypeAccidentComponent,
        data: {
          title: 'soustypeaccidents'
        }
      },
      {
        path: 'addsoustypeaccident',
        component:  AddSousTypeAccidentComponent,
        data: {
          title: 'addsoustypeaccident'
        }
      },
      {
        path: 'editsoustypeaccident/:id/edit',
        component:  AddSousTypeAccidentComponent,
        data: {
          title: 'editsoustypeaccident'
        }
      },
      {
        path: 'materiels',
        component:  MaterielComponent,
        data: {
          title: 'materiels'
        }
      },
      {
        path: 'addextincteur',
        component:  AddExtincteurComponent,
        data: {
          title: 'add extincteur'
        }
      },
      
      {
        path: 'addpoteauxincendie',
        component:  AddPoteauxIncendieComponent,
        data: {
          title: 'add poteaux incendie'
        }
      },
      
      {
        path: 'addrobinetincendie',
        component:  AddRobinetIncendieComponent,
        data: {
          title: 'add robinet incendie'
        }
      },
      
      {
        path: 'addboucheincendie',
        component:  AddBoucheIncendieComponent,
        data: {
          title: 'add bouche incendie'
        }
      },
      
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
