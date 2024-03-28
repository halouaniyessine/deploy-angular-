import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pulls2Component } from './pulls2.component';

describe('Pulls2Component', () => {
  let component: Pulls2Component;
  let fixture: ComponentFixture<Pulls2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pulls2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pulls2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
