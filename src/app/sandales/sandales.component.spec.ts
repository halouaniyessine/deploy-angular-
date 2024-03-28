import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandalesComponent } from './sandales.component';

describe('SandalesComponent', () => {
  let component: SandalesComponent;
  let fixture: ComponentFixture<SandalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SandalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
