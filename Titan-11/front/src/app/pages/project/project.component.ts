import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DragDropComponent } from 'src/app/components/drag-drop/drag-drop.component';
import { FormProjectComponent } from 'src/app/components/form-project/form-project.component';
import { Art, IResponseCatalogCrea } from 'src/app/model/http/catalog.model';
import { CatalogService } from 'src/app/services/catalog.service';
import { creaResponse } from 'src/mocks/catalog.mocks';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {
  subscriber: Subscription = new Subscription();
  catalogArt: Art[] = [];
  loading: boolean = false;

  formProject: FormProjectComponent = new FormProjectComponent(
    new FormBuilder()
  );
  formDragDrop: DragDropComponent = new DragDropComponent(new FormBuilder());

  @ViewChild(FormProjectComponent)
  set formcomponent(form: FormProjectComponent) {
    this.formProject = form;
  }
  @ViewChild(DragDropComponent)
  set dragdropcomponent(project: DragDropComponent) {
    this.formDragDrop = project;
  }

  constructor(private fb: FormBuilder, private catalogService: CatalogService) {
    // this.formProject = this.fb.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   repo: ['', Validators.required],
    // });
  }

  ngOnInit(): void {
    this.getCatalogCrea();
  }

  // receive(fields: FormGroup) {
  //   // this.formProject = fields;
  //   console.log(this.formProject.formProject.valid);
  //   console.log(this.formProject.formProject);
  // }

  validateFormItem(): boolean {
    const validate = this.formDragDrop.projects
      .map((project: Art) => project.form.valid)
      .every((validate: boolean) => validate === true);
    return validate;
  }

  getCatalogCrea(): void {
    this.subscriber = new Subscription();
    this.subscriber.add(
      this.catalogService
        .getCatalogCrea()
        .subscribe(this.okResponseCatalogCrea, this.erroResponseCatalogCrea)
    );
  }

  okResponseCatalogCrea = (response: IResponseCatalogCrea): void => {
    // this.catalogArt = response.response;
    this.catalogArt = creaResponse;
    this.loading = true;
  };

  erroResponseCatalogCrea = (error: any): void => {
    this.loading = true;
  };

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
