import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dresseurFormComponent } from './dresseur-form.component';

describe('dresseurFormComponent', () => {
  let component: dresseurFormComponent;
  let fixture: ComponentFixture<dresseurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [dresseurFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dresseurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
