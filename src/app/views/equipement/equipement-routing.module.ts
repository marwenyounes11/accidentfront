import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAgentInterventionComponent } from './components/gestionagentintervention/gestionagentintervention.component';
import { GestionInterventionComponent } from './components/gestionintervention/gestionintervention.component';
import { GestionMaterielComponent } from './components/gestionmateriel/gestionmateriel.component';




const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Equipement'
    },
    children: [
      {
        path: 'gestionmateriel',
        component:  GestionMaterielComponent,
        data: {
          title: 'gestionmateriel'
        }
      },
      {
        path: 'gestionagentintervention',
        component:GestionAgentInterventionComponent,
        data: {
          title: 'gestionagentintervention'
        }
      }, 
      {
        path: 'addagentintervention',
        component:  GestionAgentInterventionComponent,
        data: {
          title: 'addagentintervention'
        }
      },
      {
        path: 'editagentintervention/:id/edit',
        component:  GestionAgentInterventionComponent,
        data: {
          title: 'editagentintervention'
        }
      },
      {
        path: 'gestionintervention',
        component:GestionInterventionComponent,
        data: {
          title: 'gestionintervention'
        }
      }, 
      {
        path: 'addintervention',
        component:  GestionInterventionComponent,
        data: {
          title: 'addintervention'
        }
      },
      {
        path: 'editintervention/:id/edit',
        component:  GestionInterventionComponent,
        data: {
          title: 'editintervention'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipementRoutingModule {}
