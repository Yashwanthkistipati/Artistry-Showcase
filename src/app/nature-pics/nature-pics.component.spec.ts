import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturePicsComponent } from './nature-pics.component';

describe('NaturePicsComponent', () => {
  let component: NaturePicsComponent;
  let fixture: ComponentFixture<NaturePicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturePicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
