import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { DragDropComponent } from './drag-drop.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CdkDrag, CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Art } from 'src/app/model/http/catalog.model';
import { MockDragDrop, creaResponse } from 'src/mocks/catalog.mocks';

describe('DragDropComponent', () => {
  let component: DragDropComponent;
  let fixture: ComponentFixture<DragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragDropComponent],
      imports: [
        ReactiveFormsModule,
        DragDropModule,
        MatIconModule,
        MatInputModule,
        DragDropModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.projects = [
      {
        id: 1,
        name: 'Proyecto 1',
        description: 'description',
        form: new FormBuilder(),
        image: 'image',
      },
      {
        id: 2,
        name: 'Proyecto 2',
        description: 'description',
        form: new FormBuilder(),
        image: 'image',
      },
      {
        id: 3,
        name: 'Proyecto 3',
        description: 'description',
        form: new FormBuilder(),
        image: 'image',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getDataArt', () => {
    it('should return a copy of the data with forms for each element', () => {
      const mockData: Art[] = creaResponse;

      const result = component.getDataArt(mockData);

      expect(result.length).toBe(5);
      expect(result[1].name).toBe('Alnilam-Java');
      expect(result[0].form.value).toEqual({ name: '', description: '' });
    });
  });

  describe('drop', () => {
    it('drag items', () => {
      const mockEvent = {
        previousContainer: {
          data: creaResponse,
        },
        previousIndex: 0,
        currentIndex: 1,
        container: {
          data: [],
        },
      } as unknown as CdkDragDrop<Art[]>;

      component.drop(mockEvent);
      expect(component.projects.length).toBe(4);

      const container: any = { data: MockDragDrop };
      component.drop({
        previousIndex: 0,
        currentIndex: 0,
        item: { data: MockDragDrop[0] } as CdkDrag<Art>,
        container: container,
        previousContainer: container,
        isPointerOverContainer: true,
        distance: { x: 0, y: 0 },
        dropPoint: { x: 0, y: 0 },
      });
      expect(component.projects.length).toBe(4);
    });
  });

  describe('deleteItem', () => {
    it('should delete an element by its id', () => {
      const id = 2;
      expect(component.projects.length).toBe(3);
      component.deleteItem(id);
      expect(component.projects.length).toBe(2);
      const deletedItem = component.projects.find(
        (proyecto) => proyecto.id === id
      );
      expect(deletedItem).toBeUndefined();
    });

    it('should not delete any item if invalid id is provided', () => {
      const invalidId = 99;
      expect(component.projects.length).toBe(3);
      component.deleteItem(invalidId);
      expect(component.projects.length).toBe(3);
    });
  });
});
