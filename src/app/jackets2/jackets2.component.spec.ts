import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jackets2Component } from './jackets2.component';

describe('Jackets2Component', () => {
  let component: Jackets2Component;
  let fixture: ComponentFixture<Jackets2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jackets2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jackets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
