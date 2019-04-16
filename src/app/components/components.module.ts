import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarItemComponent } from './toolbar/toolbar-item/toolbar-item.component';

@NgModule({
  declarations: [ToolbarComponent, ToolbarItemComponent],
  exports: [ToolbarComponent, ToolbarItemComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
