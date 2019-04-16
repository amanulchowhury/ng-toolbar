import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { ToolbarItemComponent } from './toolbar-item/toolbar-item.component';
import { Component, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: `app-test-component`,
  template: `
    <app-toolbar #component>
      <app-toolbar-item></app-toolbar-item>
      <app-toolbar-item></app-toolbar-item>
      <app-toolbar-item></app-toolbar-item>
    </app-toolbar>
  `
})

class TestComponent {
  @ViewChild(ToolbarComponent)
  component: ToolbarComponent;
  constructor() {}
}

describe('ToolbarComponent', () => {
  let host: TestComponent;
  let component: ToolbarComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, ToolbarComponent, ToolbarItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    host = fixture.componentInstance;
    component = host.component;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 items', () => {
    expect(component.items.length).toBe(3);
  });
});
