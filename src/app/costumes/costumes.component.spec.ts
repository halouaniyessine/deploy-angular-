import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumesComponent } from './costumes.component';

describe('CostumesComponent', () => {
  let component: CostumesComponent;
  let fixture: ComponentFixture<CostumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
