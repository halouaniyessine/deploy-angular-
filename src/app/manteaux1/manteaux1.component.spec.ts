import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manteaux1Component } from './manteaux1.component';

describe('Manteaux1Component', () => {
  let component: Manteaux1Component;
  let fixture: ComponentFixture<Manteaux1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Manteaux1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Manteaux1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
