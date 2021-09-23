import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryDisplayComponent } from './mastery-display.component';

describe('MasteryDisplayComponent', () => {
  let component: MasteryDisplayComponent;
  let fixture: ComponentFixture<MasteryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
