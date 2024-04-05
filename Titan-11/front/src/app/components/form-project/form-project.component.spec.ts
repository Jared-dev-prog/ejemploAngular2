import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProjectComponent } from './form-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormProjectComponent', () => {
  let component: FormProjectComponent;
  let fixture: ComponentFixture<FormProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProjectComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
