import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';
import { ErrorHandlingOperatorComponent } from './error-handling-operator/error-handling-operator.component';
import { FilteringOperatorComponent } from './filtering-operator/filtering-operator.component';
import { JoinCreationOperatorComponent } from './join-creation-operator/join-creation-operator.component';
import { TransformationOperatorComponent } from './transformation-operator/transformation-operator.component';
import { UtilityOperatorComponent } from './utility-operator/utility-operator.component';

const routes: Routes = [
  //{ path: 'promise', component: PromiseComponent }
  { path: 'creation', component: CreationOperatorComponent },
  { path: '', redirectTo:'creation',pathMatch:'full' },
  { path: 'joincreation', component: JoinCreationOperatorComponent },
  { path: 'transformation', component: TransformationOperatorComponent },
  { path: 'filtering', component: FilteringOperatorComponent },
  { path: 'error', component: ErrorHandlingOperatorComponent },
  { path: 'utility', component: UtilityOperatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
