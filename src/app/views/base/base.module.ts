// Angular
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { AccidentInformComponent } from './components/accidentinform/accidentinform.component';
import { AgentComponent } from './components/agent/agent.component';
import { DepotComponent } from './components/depot/depot.component';
import { DistrictComponent } from './components/district/district.component';
import { LieuxAccidentComponent } from './components/lieuxaccident/lieuxaccident.component';
import { LigneComponent } from './components/ligne/ligne.component';
import { MoyenTransportComponent } from './components/moyentransport/moyentransport.component';
import { SourceInfoComponent } from './components/sourceinfo/sourceinfo.component';
import { TypeAccidentComponent } from './components/typeaccident/typeaccident.component';
import { SousTypeAccidentComponent } from './components/soustypeaccident/soustypeaccident.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { AddDegatPhysiqueComponent } from './components/add-degatphysique/add-degatphysique.component';
import { AddDegatMaterielComponent } from './components/add-degatmateriel/add-degatmateriel.component';
import { AddDepotComponent } from './components/add-depot/add-depot.component';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { AddLieuxAccidentComponent } from './components/add-lieuxaccident/add-lieuxaccident.component';
import { AddLigneComponent } from './components/add-ligne/add-ligne.component';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { AddMetroComponent } from './components/add-metro/add-metro.component';
import { AddTgmComponent } from './components/add-tgm/add-tgm.component';
import { AddSourceInfoComponent } from './components/add-sourceinfo/add-sourceinfo.component';
import { AddSousTypeAccidentComponent } from './components/add-soustypeaccident/add-soustypeaccident.component';
import { AddTypeAccidentComponent } from './components/add-typeaccident/add-typeaccident.component';
import { AddAccidentInformComponent } from './components/add-accidentinform/add-accidentinform.component';
import { AccidentTransportComponent } from './components/accidenttransport/accidenttransport.component';
import { AddAccidentTransportComponent } from './components/add-accidenttransport/add-accidenttransport.component';
import { AddAgentTransportComponent } from './components/add-agenttransport/add-agenttransport.component';
import { AgentTransportComponent } from './components/agenttransport/agenttransport.component';
import { IncidentJournalierBusComponent } from './components/incident-journalier-bus/incident-journalier-bus.component';
import { IncidentJournalierMetroComponent } from './components/incident-journalier-metro/incident-journalier-metro.component';
import { DegatMaterielComponent } from './components/degatmateriel/degatmateriel.component';
import { DegatPhysiqueComponent } from './components/degatphysique/degatphysique.component';
import { AddAccidentTravailComponent } from './components/add-accidenttravail/add-accidenttravail.component';
import { AddAccidentRouteComponent } from './components/add-accidentroute/add-accidentroute.component';
import { AddAccidentCollisionComponent } from './components/add-accidentcollision/add-accidentcollision.component';
import { AccidentComponent } from './components/accident/accident.component';
import { SourceDeclareHuissierComponent } from './components/sourcedeclarehuissier/sourcedeclarehuissier.component';
import { AgentTranstuComponent } from './components/agenttranstu/agenttranstu.component';
import { AddSourceDeclareHuissierComponent } from './components/add-sourcedeclarehuissier/add-sourcedeclarehuissier.component';
import { AddAgentTranstuComponent } from './components/add-agenttranstu/add-agenttranstu.component';
import { SecuriteComponent } from './components/securite/securite.component';
import { AddSecuriteComponent } from './components/add-securite/add-securite.component';
import { AmbulancierComponent } from './components/ambulancier/ambulancier.component';
import { AddAmbulancierComponent } from './components/add-ambulancier/add-ambulancier.component';
import { HuissierComponent } from './components/huissier/huissier.component';
import { AddHuissierComponent } from './components/add-huissier/add-huissier.component';
import { RapportAccidentComponent } from './components/rapportaccident/rapportaccident.component';
import { RapportAccidentCollisionRouteBusComponent } from './components/rapportaccidentcollisionroutebus/rapportaccidentcollisionroutebus.component';
import { RapportAccidentCollisionRouteMetrosComponent } from './components/rapportaccidentcollisionroutemetros/rapportaccidentcollisionroutemetros.component';
import { AddDepartementComponent } from './components/add-departement/add-departement.component';
import { DepartementComponent } from './components/departement/departement.component';
import { MaterielComponent } from './components/materiel/materiel.component';
import { AddExtincteurComponent } from './components/add-extincteur/add-extincteur.component';
import { AddPoteauxIncendieComponent } from './components/add-poteauxincendie/add-poteauxincendie.component';
import { AddBoucheIncendieComponent } from './components/add-boucheincendie/add-boucheincendie.component';
import { AddRobinetIncendieComponent } from './components/add-robinetincendie/add-robinetincendie.component';
import { AgentInterventionComponent } from './components/agentintervention/agentintervention.component';
import { AddAgentInterventionComponent } from './components/add-agentintervention/add-agentintervention.component';
import { AddInterventionComponent } from './components/add-intervention/add-intervention.component';
import { InterventionComponent } from './components/intervention/intervention.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA568T8y-b0bBXEiSEf8VYXBLit5jCZ0Hk',
      libraries: ["places", "geometry"]

    }),
    TooltipModule.forRoot()
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    NavbarsComponent,
    AccidentComponent,
    AccidentInformComponent,
    AccidentTransportComponent,
    AgentTransportComponent,
    AgentComponent,
    AgentInterventionComponent,
    InterventionComponent,
    AgentTranstuComponent,
    AmbulancierComponent,
    DegatMaterielComponent,
    DegatPhysiqueComponent,
    DepotComponent,
    DepartementComponent,
    DistrictComponent,
    HuissierComponent,
    LieuxAccidentComponent,
    LigneComponent,
    MoyenTransportComponent,
    SourceInfoComponent,
    SecuriteComponent,
    SourceDeclareHuissierComponent,
    TypeAccidentComponent,
    SousTypeAccidentComponent,
    AddAccidentTravailComponent,
    AddAccidentRouteComponent,
    AddAccidentCollisionComponent,
    AddAccidentInformComponent,
    AddAccidentTransportComponent,
    AddAgentTransportComponent,
    AddAgentComponent,
    AddAgentTranstuComponent,
    AddAgentInterventionComponent,
    AddInterventionComponent,
    AddAmbulancierComponent,
    AddHuissierComponent,
    AddDegatPhysiqueComponent,
    AddDegatMaterielComponent,
    AddDepotComponent,
    AddDepartementComponent,
    AddDistrictComponent,
    AddLieuxAccidentComponent,
    AddLigneComponent,
    AddBusComponent,
    AddMetroComponent,
    AddTgmComponent,
    AddSourceInfoComponent,
    AddSecuriteComponent,
    AddSourceDeclareHuissierComponent,
    AddSousTypeAccidentComponent,
    AddTypeAccidentComponent,
    AddExtincteurComponent,
    AddPoteauxIncendieComponent,
    AddBoucheIncendieComponent,
    AddRobinetIncendieComponent,
    IncidentJournalierBusComponent,
    IncidentJournalierMetroComponent,
    RapportAccidentComponent,
    RapportAccidentCollisionRouteBusComponent,
    RapportAccidentCollisionRouteMetrosComponent,
    MaterielComponent,
  ],
  providers: []
})
export class BaseModule { }
