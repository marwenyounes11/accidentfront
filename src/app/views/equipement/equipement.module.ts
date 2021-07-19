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

import { EquipementRoutingModule } from './equipement-routing.module';
import { GestionMaterielComponent } from './components/gestionmateriel/gestionmateriel.component';
import { InterventionComponent } from './components/gestionintervention/intervention.component';
import { AgentInterventionComponent } from './components/gestionagentintervention/agentintervention.component';
import { GestionAgentInterventionComponent } from './components/gestionagentintervention/gestionagentintervention.component';
import { GestionInterventionComponent } from './components/gestionintervention/gestionintervention.component';
import { NgxPaginationModule } from 'ngx-pagination';




 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    EquipementRoutingModule,
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgxPaginationModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    GestionMaterielComponent,
    GestionAgentInterventionComponent,
    AgentInterventionComponent,
    InterventionComponent,
    GestionInterventionComponent
  ],
  providers: []
})
export class EquipementModule { }
