import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormReactive } from './login-form-reactive';

describe('LoginFormReactive', () => {
  let component: LoginFormReactive;
  let fixture: ComponentFixture<LoginFormReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
