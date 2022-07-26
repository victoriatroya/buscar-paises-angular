import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisModule } from "./pais/pais.module";
import {PorRegionComponent} from "./pais/pages/por-region/por-region.component";
import {VerPaisComponent} from "./pais/pages/ver-pais/ver-pais.component";
import {PorCapitalComponent} from "./pais/pages/por-capital/por-capital.component";
import {PorPaisComponent} from "./pais/pages/por-pais/por-pais.component";

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
