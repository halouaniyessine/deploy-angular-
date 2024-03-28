import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jupes1Component } from './jupes1.component';

describe('Jupes1Component', () => {
  let component: Jupes1Component;
  let fixture: ComponentFixture<Jupes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jupes1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jupes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
