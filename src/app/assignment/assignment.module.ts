import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentDialogComponent } from './assignment-dialog/assignment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [AssignmentFormComponent, AssignmentDialogComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AssignmentModule { }
