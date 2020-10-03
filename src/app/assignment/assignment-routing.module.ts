import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';


const routes: Routes = [
  {
    path: '',
    component: AssignmentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
