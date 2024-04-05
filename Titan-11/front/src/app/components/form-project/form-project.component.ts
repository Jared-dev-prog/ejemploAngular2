import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss'],
})
export class FormProjectComponent implements OnInit {
  // @Output() isValidateForm: EventEmitter<FormGroup> = new EventEmitter();
  @Input() formProject: FormGroup;

  // form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formProject = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      repo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // test() {
  //   if (this.formProject.valid) {
  //     this.isValidateForm.emit(this.formProject);
  //   }
  // }
}
