import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './views/administration/service/admin-guard.service';
import { EquipGuard } from './views/equipement/service/equip-guard.service';
import { P403Component } from './views/error/403.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { ParamGuard } from './views/parametres/service/param-guard.service';
import { RapportGuard } from './views/rapports/service/rapport-guard.service';
import { RegisterComponent } from './views/register/register.component';
import { StatGuard } from './views/statistiques/service/stat-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '403',
    component: P403Component,
    data: {
      title: 'Page 403'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'administration',
        canActivate: [AdminGuard],
        loadChildren: () => import('./views/administration/administration.module').then(m => m.AdministrationModule)
      },
      {
        path: 'parametres',
        canActivate: [ParamGuard],
        canActivateChild : [ParamGuard],
        loadChildren: () => import('./views/parametres/parametres.module').then(m => m.ParametresModule)
      },
      {
        path: 'equipement',
        canActivate: [EquipGuard],
        canActivateChild : [EquipGuard],
        loadChildren: () => import('./views/equipement/equipement.module').then(m => m.EquipementModule)
      },
      {
        path: 'rapports',
        canActivate: [RapportGuard],
        loadChildren: () => import('./views/rapports/rapports.module').then(m => m.RapportsModule)
      },
      {
        path: 'statistiques',
        canActivate: [StatGuard],
        loadChildren: () => import('./views/statistiques/statistiques.module').then(m => m.StatistiquesModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
