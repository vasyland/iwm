import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLatestNewsComponent } from './flex-latest-news.component';

describe('FlexLatestNewsComponent', () => {
  let component: FlexLatestNewsComponent;
  let fixture: ComponentFixture<FlexLatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexLatestNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
