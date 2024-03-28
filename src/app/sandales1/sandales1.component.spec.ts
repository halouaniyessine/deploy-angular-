import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandales1Component } from './sandales1.component';

describe('Sandales1Component', () => {
  let component: Sandales1Component;
  let fixture: ComponentFixture<Sandales1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sandales1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sandales1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
