import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalisticUiKitForAngularComponent } from './minimalistic-ui-kit-for-angular.component';

describe('MinimalisticUiKitForAngularComponent', () => {
  let component: MinimalisticUiKitForAngularComponent;
  let fixture: ComponentFixture<MinimalisticUiKitForAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalisticUiKitForAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalisticUiKitForAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
