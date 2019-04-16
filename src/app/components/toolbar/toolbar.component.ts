import { Component, OnInit, ContentChildren, QueryList, ViewChildren, AfterContentInit } from '@angular/core';
import { ToolbarItemComponent } from './toolbar-item/toolbar-item.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @ContentChildren(ToolbarItemComponent)
  items: QueryList<ToolbarItemComponent>;

  toolbarItems: ToolbarItemComponent[];

  constructor() { }

  ngOnInit() { }

}
