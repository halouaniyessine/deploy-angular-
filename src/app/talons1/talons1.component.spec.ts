import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Talons1Component } from './talons1.component';

describe('Talons1Component', () => {
  let component: Talons1Component;
  let fixture: ComponentFixture<Talons1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Talons1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Talons1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
