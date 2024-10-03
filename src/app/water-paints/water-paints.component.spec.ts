import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPaintsComponent } from './water-paints.component';

describe('WaterPaintsComponent', () => {
  let component: WaterPaintsComponent;
  let fixture: ComponentFixture<WaterPaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterPaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterPaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
