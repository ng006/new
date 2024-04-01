import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboComponent } from './chatbo.component';

describe('ChatboComponent', () => {
  let component: ChatboComponent;
  let fixture: ComponentFixture<ChatboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
