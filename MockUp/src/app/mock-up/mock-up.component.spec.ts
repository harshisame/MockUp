/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockUpComponent } from './mock-up.component';

describe('MockUpComponent', () => {
  let component: MockUpComponent;
  let fixture: ComponentFixture<MockUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
