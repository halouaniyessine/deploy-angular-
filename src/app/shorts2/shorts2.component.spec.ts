import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorts2Component } from './shorts2.component';

describe('Shorts2Component', () => {
  let component: Shorts2Component;
  let fixture: ComponentFixture<Shorts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shorts2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shorts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
