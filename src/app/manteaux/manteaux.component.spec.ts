import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteauxComponent } from './manteaux.component';

describe('ManteauxComponent', () => {
  let component: ManteauxComponent;
  let fixture: ComponentFixture<ManteauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManteauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManteauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
