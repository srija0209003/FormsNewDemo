import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorking } from './user-working';

describe('UserWorking', () => {
  let component: UserWorking;
  let fixture: ComponentFixture<UserWorking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserWorking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
