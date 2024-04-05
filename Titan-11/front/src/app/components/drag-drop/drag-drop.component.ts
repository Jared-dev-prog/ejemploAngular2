import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';
import { Art } from 'src/app/model/http/catalog.model';

export interface FormItem extends Art {}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent implements OnInit {
  @Input() catalogArt: Art[] = [];
  arts: Art[] = [];
  projects: Art[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.arts = this.getDataArt(this.catalogArt);
  }

  getDataArt(data: Art[]): Art[] {
    return data.map((item) => ({
      ...item,
      form: this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      }),
    }));
  }

  drop(event: CdkDragDrop<Art[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const art = event.previousContainer.data[event.previousIndex];
      const newTask = {
        ...art,
        id: +Date.now().toString(),
      };
      // event.container.data.splice(event.currentIndex, 0, newTask);
      this.projects = [...this.projects, newTask];
    }
  }

  deleteItem(id: number) {
    const newProjects = this.projects.filter((project) => project.id !== id);
    this.projects = newProjects;
  }
}
