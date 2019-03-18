/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockBodyComponent } from './mock-body.component';

describe('MockBodyComponent', () => {
  let component: MockBodyComponent;
  let fixture: ComponentFixture<MockBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
