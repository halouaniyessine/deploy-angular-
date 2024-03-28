import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baskets1Component } from './baskets1.component';

describe('Baskets1Component', () => {
  let component: Baskets1Component;
  let fixture: ComponentFixture<Baskets1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baskets1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Baskets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
