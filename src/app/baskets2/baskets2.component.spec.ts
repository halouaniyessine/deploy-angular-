import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baskets2Component } from './baskets2.component';

describe('Baskets2Component', () => {
  let component: Baskets2Component;
  let fixture: ComponentFixture<Baskets2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baskets2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Baskets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
