import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataAgainComponent } from './show-data-again.component';

describe('ShowDataAgainComponent', () => {
  let component: ShowDataAgainComponent;
  let fixture: ComponentFixture<ShowDataAgainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataAgainComponent]
    });
    fixture = TestBed.createComponent(ShowDataAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
