import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dresseurComponent } from './dresseur.component';

describe('dresseurComponent', () => {
  let component: dresseurComponent;
  let fixture: ComponentFixture<dresseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [dresseurComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
