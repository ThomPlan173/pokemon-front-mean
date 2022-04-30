import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dresseurListComponent } from './dresseur-list.component';

describe('dresseurListComponent', () => {
  let component: dresseurListComponent;
  let fixture: ComponentFixture<dresseurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [dresseurListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dresseurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
