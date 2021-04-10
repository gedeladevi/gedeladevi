import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMembershipComponent } from './full-membership.component';

describe('FullMembershipComponent', () => {
  let component: FullMembershipComponent;
  let fixture: ComponentFixture<FullMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
