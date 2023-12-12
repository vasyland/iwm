import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { DecisionDataComponent } from './decision-data/decision-data.component';
import { ScenariosComponent } from './components/scenarios/scenarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'decision', component: DecisionDataComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'scenarios', component: ScenariosComponent },
  { path: '**', component: DepartmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  DepartmentListComponent,
  EmployeeListComponent,
  DecisionDataComponent,
  ScenariosComponent
];
