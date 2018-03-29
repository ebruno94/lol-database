import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionEditComponent } from './champion-edit.component';

describe('ChampionEditComponent', () => {
  let component: ChampionEditComponent;
  let fixture: ComponentFixture<ChampionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
