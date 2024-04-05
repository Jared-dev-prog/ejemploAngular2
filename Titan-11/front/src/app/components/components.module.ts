import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DragDropComponent } from './drag-drop/drag-drop.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { FormProjectComponent } from './form-project/form-project.component';

@NgModule({
  declarations: [
    UsersFormComponent,
    ChartComponent,
    DragDropComponent,
    FormProjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgApexchartsModule,
    DragDropModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    UsersFormComponent,
    ChartComponent,
    DragDropComponent,
    FormProjectComponent,
  ],
})
export class ComponentsModule {}
