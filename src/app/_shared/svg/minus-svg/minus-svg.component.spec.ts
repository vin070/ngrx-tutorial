import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusSvgComponent } from './minus-svg.component';

describe('MinusSvgComponent', () => {
  let component: MinusSvgComponent;
  let fixture: ComponentFixture<MinusSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinusSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
