import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxBasicsComponent } from './flexbox-basics.component';

describe('FlexboxBasicsComponent', () => {
  let component: FlexboxBasicsComponent;
  let fixture: ComponentFixture<FlexboxBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexboxBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexboxBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
