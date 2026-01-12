import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptWorking } from './dept-working';

describe('DeptWorking', () => {
  let component: DeptWorking;
  let fixture: ComponentFixture<DeptWorking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptWorking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptWorking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
