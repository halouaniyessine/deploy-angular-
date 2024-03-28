import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manteaux2Component } from './manteaux2.component';

describe('Manteaux2Component', () => {
  let component: Manteaux2Component;
  let fixture: ComponentFixture<Manteaux2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Manteaux2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Manteaux2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
