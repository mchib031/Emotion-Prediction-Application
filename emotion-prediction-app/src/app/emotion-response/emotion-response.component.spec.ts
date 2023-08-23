import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionResponseComponent } from './emotion-response.component';

describe('EmotionResponseComponent', () => {
  let component: EmotionResponseComponent;
  let fixture: ComponentFixture<EmotionResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
