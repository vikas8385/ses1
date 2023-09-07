import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth1LoginComponent } from './auth1-login.component';

describe('Auth1LoginComponent', () => {
  let component: Auth1LoginComponent;
  let fixture: ComponentFixture<Auth1LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Auth1LoginComponent]
    });
    fixture = TestBed.createComponent(Auth1LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
