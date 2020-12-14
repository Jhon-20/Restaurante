import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBodyComponent } from './lista-body.component';

describe('ListaBodyComponent', () => {
  let component: ListaBodyComponent;
  let fixture: ComponentFixture<ListaBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
