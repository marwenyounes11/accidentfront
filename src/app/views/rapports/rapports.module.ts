// Angular
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Forms Component


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';


// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RapportsRoutingModule } from './rapports-routing.module';
import { RapportAccidentComponent } from './components/rapportaccident/rapportaccident.component';
import { RapportAccidentCollisionRouteBusComponent } from './components/rapportaccidentcollisionroutebus/rapportaccidentcollisionroutebus.component';
import { RapportAccidentCollisionRouteMetrosComponent } from './components/rapportaccidentcollisionroutemetros/rapportaccidentcollisionroutemetros.component';
import { IncidentJournalierReseauxComponent } from './components/incident-journalier-reseaux/incident-journalier-reseaux.component';
import { RapportAccidentCollisionRouteTgmComponent } from './components/rapportaccidentcollisionroutetgm/rapportaccidentcollisionroutetgm.component';
import { IncidentJournalierTravailComponent } from './components/incident-journalier-travail/incident-journalier-travail.component';
import { EstimationPrixDegatParDateComponent } from './components/estimationprixdegatpardate/estimationprixdegatpardate.component';
import { EstimationPrixDegatParTypeAccidentComponent } from './components/estimationprixdegatpartypeaccident/estimationprixdegatpartypeaccident.component';
import { EstimationPrixDegatParSousTypeAccidentComponent } from './components/estimationprixdegatparsoustypeaccident/estimationprixdegatparsoustypeaccident.component';
import { NbrAccidentParDateComponent } from './components/nbraccidentpardate/nbraccidentpardate.component';
import { NbrAccidentParDistrictComponent } from './components/nbraccidentpardistrict/nbraccidentpardistrict.component';
import { NbrAccidentParMoyenTransportComponent } from './components/nbraccidentparmoyentransport/nbraccidentparmoyentransport.component';
import { NbrAccidentParMoyenTransportDateComponent } from './components/nbraccidentparmoyentransportdate/nbraccidentparmoyentransportdate.component';
import { NbrAccidentParTypeAccidentComponent } from './components/nbraccidentpartypeaccident/nbraccidentpartypeaccident.component';
import { NbrAccidentParSousTypeAccidentComponent } from './components/nbraccidentparsoustypeaccident/nbraccidentparsoustypeaccident.component';
import { NbrBlesserExterneComponent } from './components/nbrblesserexterne/nbrblesserexterne.component';
import { NbrBlesserInterneComponent } from './components/nbrblesserinterne/nbrblesserinterne.component';
import { NbrBlesserParNiveauBlessureComponent } from './components/nbrblesserparniveaublessure/nbrblesserparniveaublessure.component';
import { NbrMortsParDateComponent } from './components/nbrmortspardate/nbrmortspardate.component';
import { EvaluationNbrAccidentComponent } from './components/evaluationnbraccident/evaluationnbraccident.component';
import { EvaluationNbrAccidentReseauxComponent } from './components/evaluationnbraccidentreseaux/evaluationnbraccidentreseaux.component';





 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RapportsRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    IncidentJournalierReseauxComponent,
    IncidentJournalierTravailComponent,
    RapportAccidentComponent,
    RapportAccidentCollisionRouteBusComponent,
    RapportAccidentCollisionRouteMetrosComponent,
    RapportAccidentCollisionRouteTgmComponent,
    EstimationPrixDegatParDateComponent,
    EstimationPrixDegatParTypeAccidentComponent,
    EstimationPrixDegatParSousTypeAccidentComponent,
    NbrAccidentParDateComponent,
    EvaluationNbrAccidentComponent,
    EvaluationNbrAccidentReseauxComponent,
    NbrAccidentParDistrictComponent,
    NbrAccidentParMoyenTransportComponent,
    NbrAccidentParMoyenTransportDateComponent,
    NbrAccidentParTypeAccidentComponent,
    NbrAccidentParSousTypeAccidentComponent,
    NbrBlesserExterneComponent,
    NbrBlesserInterneComponent,
    NbrBlesserParNiveauBlessureComponent,
    NbrMortsParDateComponent

    
  ],
  providers: []
})
export class RapportsModule { }
