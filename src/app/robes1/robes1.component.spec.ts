import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Robes1Component } from './robes1.component';

describe('Robes1Component', () => {
  let component: Robes1Component;
  let fixture: ComponentFixture<Robes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Robes1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Robes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
