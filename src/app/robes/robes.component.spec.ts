import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobesComponent } from './robes.component';

describe('RobesComponent', () => {
  let component: RobesComponent;
  let fixture: ComponentFixture<RobesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RobesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
