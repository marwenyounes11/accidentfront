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
import { ParametresRoutingModule } from './parametres-routing.module';




import { AgmCoreModule } from '@agm/core';
import { GestionDepotComponent } from './components/gestiondepot/gestiondepot.component';
import { DepotComponent } from './components/gestiondepot/depot.component';
import { GestionAccidentInformComponent } from './components/gestionaccidentinform/gestionaccidentinform.component';
import { AccidentInformComponent } from './components/gestionaccidentinform/accidentinform.component';
import { GestionAccidentTransportComponent } from './components/gestionaccidenttransport/gestionaccidenttransport.component';
import { AccidentTransportComponent } from './components/gestionaccidenttransport/accidenttransport.component';
import { GestionAgentComponent } from './components/gestionagent/gestionagent.component';
import { AgentComponent } from './components/gestionagent/agent.component';
import { GestionAgentTranstuComponent } from './components/gestionagenttranstu/gestionagenttranstu.component';
import { AgentTranstuComponent } from './components/gestionagenttranstu/agenttranstu.component';
import { GestionAmbulancierComponent } from './components/gestionambulancier/gestionambulancier.component';
import { AmbulancierComponent } from './components/gestionambulancier/ambulancier.component';
import { GestionDepartementComponent } from './components/gestiondepartement/gestiondepartement.component';
import { DepartementComponent } from './components/gestiondepartement/departement.component';
import { GestionDistrictComponent } from './components/gestiondistrict/gestiondistrict.component';
import { DistrictComponent } from './components/gestiondistrict/district.component';
import { GestionHuissierComponent } from './components/gestionhuissier/gestionhuissier.component';
import { HuissierComponent } from './components/gestionhuissier/huissier.component';
import { GestionLieuxAccidentComponent } from './components/gestionlieuxaccident/gestionlieuxaccident.component';
import { LieuxAccidentComponent } from './components/gestionlieuxaccident/lieuxaccident.component';
import { GestionLigneComponent } from './components/gestionligne/gestionligne.component';
import { LigneComponent } from './components/gestionligne/ligne.component';
import { GestionSourceInfoComponent } from './components/gestionsourceinfo/gestionsourceinfo.component';
import { SourceInfoComponent } from './components/gestionsourceinfo/sourceinfo.component';
import { GestionSecuriteComponent } from './components/gestionsecurite/gestionsecurite.component';
import { SecuriteComponent } from './components/gestionsecurite/securite.component';
import { GestionSourceDeclareHuissierComponent } from './components/gestionsourcedeclarehuissier/gestionsourcedeclarehuissier.component';
import { SourceDeclareHuissierComponent } from './components/gestionsourcedeclarehuissier/sourcedeclarehuissier.component';
import { GestionAccidentComponent } from './components/gestionaccident/gestionaccident.component';
import { GestionMoyenTransportComponent } from './components/gestionmoyentransport/gestionmoyentransport.component';
import { GestionDegatComponent } from './components/gestiondegat/gestiondegat.component';
import { GestionDegatVictimeComponent } from './components/gestiondegatvictime/gestiondegatvictime.component';
import { GestionDegatTransportComponent } from './components/gestiondegattransport/gestiondegattransport.component';
import { DegatVictimeComponent } from './components/gestiondegatvictime/degatvictime.component';
import { DegatTransportComponent } from './components/gestiondegattransport/degattransport.component';
import { GestionVictimeComponent } from './components/gestionvictime/gestionvictime.component';
import { VictimeComponent } from './components/gestionvictime/victime.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationAccidentComponent } from './components/notificationaccident/notificationaccident.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';





 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ParametresRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVmakuCiEFQH09xunj7aCJzEijZgs2jwk',
      libraries: ['places']
    }),
    TooltipModule.forRoot()
  ],
  declarations: [
    GestionAccidentComponent,
    GestionAccidentInformComponent,
    AccidentInformComponent,
    GestionAccidentTransportComponent,
    AccidentTransportComponent,
    GestionAgentComponent,
    AgentComponent,
    GestionAgentTranstuComponent,
    AgentTranstuComponent,
    GestionAmbulancierComponent,
    AmbulancierComponent,
    GestionDegatComponent,
    GestionDegatVictimeComponent,
    DegatVictimeComponent,
    GestionDegatTransportComponent,
    DegatTransportComponent,
    GestionDepartementComponent,
    DepartementComponent,
    GestionDepotComponent,
    DepotComponent,
    GestionDistrictComponent,
    DistrictComponent,
    GestionHuissierComponent,
    HuissierComponent,
    GestionLieuxAccidentComponent,
    LieuxAccidentComponent,
    GestionLigneComponent,
    LigneComponent,
    GestionMoyenTransportComponent,
    GestionSourceInfoComponent,
    SourceInfoComponent,
    GestionSecuriteComponent,
    SecuriteComponent,
    GestionSourceDeclareHuissierComponent,
    SourceDeclareHuissierComponent,
    GestionVictimeComponent,
    VictimeComponent,
    NotificationAccidentComponent
   
    
  ],
  providers: []
})
export class ParametresModule { }
