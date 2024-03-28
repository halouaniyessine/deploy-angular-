import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandales2Component } from './sandales2.component';

describe('Sandales2Component', () => {
  let component: Sandales2Component;
  let fixture: ComponentFixture<Sandales2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sandales2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sandales2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
