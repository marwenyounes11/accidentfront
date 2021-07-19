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
import { AdministrationRoutingModule } from './administration-routing.module';
import { GestionUserComponent } from './components/gestionuser/gestionuser.component';
import {UserComponent} from './components/gestionuser/user.component'

import { ProfileComponent } from './components/gestionprofile/profile/profile.component';
import { GestionDroitComponent } from './components/gestiondroit/gestiondroit.component';
import { DroitComponent } from './components/gestiondroit/droit.component';
import { RubriqueComponent } from './components/gestionrubrique/rubrique.component';
import { GestionRubriqueComponent } from './components/gestionrubrique/gestionrubrique.component';
import { GestionSousRubriqueComponent } from './components/gestionsousrubrique/gestionsousrubrique.component';
import { SousRubriqueComponent } from './components/gestionsousrubrique/sousrubrique.component';
import { DroitRolesComponent } from './components/gestiondroitroles/droitroles.component';
import { GestionDroitRolesComponent } from './components/gestiondroitroles/gestiondroitroles.component';





 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdministrationRoutingModule,
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
    GestionUserComponent,
    UserComponent,
    ProfileComponent,
    DroitComponent,
    GestionDroitComponent,
    RubriqueComponent,
    GestionRubriqueComponent,
    SousRubriqueComponent,
    GestionDroitRolesComponent,
    DroitRolesComponent,
    GestionSousRubriqueComponent
  ],
  providers: []
})
export class AdministrationModule { }
