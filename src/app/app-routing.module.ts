import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { UnitComponent } from './unit-tabs/unit/unit.component';
import { UnitTabsComponent } from './unit-tabs/unit-tabs.component';
import { GroupTabsComponent } from './group-tabs/group-tabs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'nav/unit/f', pathMatch: 'full'},
  {
    path: 'nav',
    component: NavComponent,
    children: [
      { path: 'unit', component: UnitComponent },
      { path: 'unit/:id', component: UnitTabsComponent },
      { path: 'group/:id', component: GroupTabsComponent },
    ]
  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
