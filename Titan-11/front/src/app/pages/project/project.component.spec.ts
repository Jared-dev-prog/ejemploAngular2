import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsumeService } from 'src/app/services/consume.service';
import { FormProjectComponent } from 'src/app/components/form-project/form-project.component';
import { DragDropComponent } from 'src/app/components/drag-drop/drag-drop.component';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Art } from 'src/app/model/http/catalog.model';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let consumeServiceSpy: jasmine.SpyObj<ConsumeService>;
  let dragDropComponent: DragDropComponent;

  beforeEach(async () => {
    consumeServiceSpy = jasmine.createSpyObj('ConsumeService', ['httpGet']);
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent, FormProjectComponent, DragDropComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        DragDropModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ConsumeService, useValue: consumeServiceSpy },
        {
          provide: DragDropComponent,
          useValue: new DragDropComponent(new FormBuilder()),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    dragDropComponent = fixture.debugElement.injector.get(DragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return valid form and invalid form', () => {
    const validForm: Art = {
      id: 1,
      description: 'descriptin',
      form: new FormBuilder().group({
        name: ['name', Validators.required],
        description: ['description', Validators.required],
      }),
      image: 'image',
      name: 'name',
    };
    const invalidForm: Art = {
      id: 1,
      description: 'descriptin',
      form: new FormBuilder().group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      }),
      image: 'image',
      name: 'name',
    };

    component.formDragDrop.projects = [validForm];
    expect(component.validateFormItem()).toBeTrue();

    component.formDragDrop.projects = [invalidForm];
    expect(component.validateFormItem()).toBeFalsy();
  });
});
