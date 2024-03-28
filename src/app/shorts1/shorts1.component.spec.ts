import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorts1Component } from './shorts1.component';

describe('Shorts1Component', () => {
  let component: Shorts1Component;
  let fixture: ComponentFixture<Shorts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shorts1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shorts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
