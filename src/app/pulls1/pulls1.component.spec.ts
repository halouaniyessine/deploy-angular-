import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pulls1Component } from './pulls1.component';

describe('Pulls1Component', () => {
  let component: Pulls1Component;
  let fixture: ComponentFixture<Pulls1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pulls1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pulls1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
