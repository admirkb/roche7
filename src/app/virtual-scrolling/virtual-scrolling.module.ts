import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollerComponent } from './scroller/scroller.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ScrollerContextComponent } from './scroller-context/scroller-context.component';
import { ScrollerCacheComponent } from './scroller-cache/scroller-cache.component';
import { ScrollerDataSourceComponent } from './scroller-data-source/scroller-data-source.component';
import { ScrollerFixedBufferComponent } from './scroller-fixed-buffer/scroller-fixed-buffer.component';
import { ScrollerHorizontalComponent } from './scroller-horizontal/scroller-horizontal.component';
import { ScrollerParentTagComponent } from './scroller-parent-tag/scroller-parent-tag.component';
import { ScrollerStrategiesComponent } from './scroller-strategies/scroller-strategies.component';

@NgModule({
  declarations: [ScrollerComponent, ScrollerContextComponent, ScrollerCacheComponent, ScrollerDataSourceComponent,
    ScrollerFixedBufferComponent, ScrollerHorizontalComponent, ScrollerParentTagComponent, ScrollerStrategiesComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ]
})
export class VirtualScrollingModule { }
