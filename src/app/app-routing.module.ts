import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';

import { AddDrinkComponent } from './drinks/add-drink.component';
import { DrinkDetailComponent } from './drinks/drink-detail.component';
import { EditDrinkComponent } from './drinks/edit-drink.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',                              component: DashboardComponent },
  { path: 'manage/drinks/add',                      component: AddDrinkComponent },
  { path: 'manage/drinks/:id/edit',                 component: EditDrinkComponent },
  { path: 'manage/drinks/:id/detail',               component: DrinkDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
