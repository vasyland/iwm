import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRatingComponent } from './country-rating.component';

describe('CountryRatingComponent', () => {
  let component: CountryRatingComponent;
  let fixture: ComponentFixture<CountryRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
