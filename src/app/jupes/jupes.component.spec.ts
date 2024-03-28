import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupesComponent } from './jupes.component';

describe('JupesComponent', () => {
  let component: JupesComponent;
  let fixture: ComponentFixture<JupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JupesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
