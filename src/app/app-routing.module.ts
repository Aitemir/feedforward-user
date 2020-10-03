import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentModule } from './assignment/assignment.module';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {
    path: 'assignment',
    loadChildren: ()=> AssignmentModule
  },
  {
    path: '',
    component: AuthComponent,
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
