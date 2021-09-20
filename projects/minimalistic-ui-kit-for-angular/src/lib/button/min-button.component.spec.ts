import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinButton } from './min-button.component';

describe('ButtonComponent', () => {
  let component: MinButton;
  let fixture: ComponentFixture<MinButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
