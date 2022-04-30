import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dresseurDetailsComponent } from './dresseur-details.component';

describe('dresseurDetailsComponent', () => {
  let component: dresseurDetailsComponent;
  let fixture: ComponentFixture<dresseurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [dresseurDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dresseurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
