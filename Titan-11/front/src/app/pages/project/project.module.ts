import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ComponentsModule,
    MatButtonModule,
  ],
})
export class ProjectModule {}
