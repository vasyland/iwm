import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyListComponent } from './BuyListComponent.1';

describe('BuyListComponent', () => {
  let component: BuyListComponent;
  let fixture: ComponentFixture<BuyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
