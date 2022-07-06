import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSvgComponent } from './reset-svg.component';

describe('ResetSvgComponent', () => {
  let component: ResetSvgComponent;
  let fixture: ComponentFixture<ResetSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
