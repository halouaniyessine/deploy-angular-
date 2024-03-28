import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Costumes2Component } from './costumes2.component';

describe('Costumes2Component', () => {
  let component: Costumes2Component;
  let fixture: ComponentFixture<Costumes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Costumes2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Costumes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
