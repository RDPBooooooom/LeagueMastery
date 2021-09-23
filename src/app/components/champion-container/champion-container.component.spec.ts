import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionContainerComponent } from './champion-container.component';

describe('ChampionContainerComponent', () => {
  let component: ChampionContainerComponent;
  let fixture: ComponentFixture<ChampionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
