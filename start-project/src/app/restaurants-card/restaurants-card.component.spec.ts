import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsCardComponent } from './restaurants-card.component';

describe('RestaurantsCardComponent', () => {
  let component: RestaurantsCardComponent;
  let fixture: ComponentFixture<RestaurantsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
