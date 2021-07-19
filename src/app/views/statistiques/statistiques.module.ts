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
import { StatistiquesRoutingModule } from './statistiques-routing.module';

import { ChartsModule } from 'ng2-charts';
import { NbrMortsParDateComponent } from './components/nbrmortspardate/nbrmortspardate.component';
import { NbrBlesserExterneComponent } from './components/nbrblesserexterne/nbrblesserexterne.component';
import { NbrBlesserInterneComponent } from './components/nbrblesserinterne/nbrblesserinterne.component';
import { NbrAccidentParDateComponent } from './components/nbraccidentpardate/nbraccidentpardate.component';
import { NbrBlesserParNiveauBlessureComponent } from './components/nbrblesserparniveaublessure/nbrblesserparniveaublessure.component';
import { NbrAccidentParDistrictComponent } from './components/nbraccidentpardistrict/nbraccidentpardistrict.component';
import { NbrAccidentParMoyenTransportComponent } from './components/nbraccidentparmoyentransport/nbraccidentparmoyentransport.component';
import { NbrAccidentParTypeAccidentComponent } from './components/nbraccidentpartypeaccident/nbraccidentpartypeaccident.component';
import { NbrAccidentParSousTypeAccidentComponent } from './components/nbraccidentparsoustypeaccident/nbraccidentparsoustypeaccident.component';
import { EstimationPrixDegatParDateComponent } from './components/estimationprixdegatpardate/estimationprixdegatpardate.component';
import { EstimationPrixDegatParTypeAccidentComponent } from './components/estimationprixdegatpartypeaccident/estimationprixdegatpartypeaccident.component';
import { EstimationPrixDegatParSousTypeAccidentComponent } from './components/estimationprixdegatparsoustypeaccident/estimationprixdegatparsoustypeaccident.component';


 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ChartsModule,
    StatistiquesRoutingModule,
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
    NbrMortsParDateComponent,
    NbrBlesserExterneComponent,
    NbrBlesserInterneComponent,
    NbrBlesserParNiveauBlessureComponent,
    NbrAccidentParDateComponent,
    NbrAccidentParDistrictComponent,
    NbrAccidentParMoyenTransportComponent,
    NbrAccidentParTypeAccidentComponent,
    NbrAccidentParSousTypeAccidentComponent,
    EstimationPrixDegatParDateComponent,
    EstimationPrixDegatParTypeAccidentComponent,
    EstimationPrixDegatParSousTypeAccidentComponent
    
  ],
  providers: []
})
export class StatistiquesModule { }
