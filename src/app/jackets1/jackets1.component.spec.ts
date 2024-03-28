import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jackets1Component } from './jackets1.component';

describe('Jackets1Component', () => {
  let component: Jackets1Component;
  let fixture: ComponentFixture<Jackets1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jackets1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jackets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
