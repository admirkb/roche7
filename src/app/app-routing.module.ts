import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollerComponent } from './virtual-scrolling/scroller/scroller.component';
import { ScrollerContextComponent } from './virtual-scrolling/scroller-context/scroller-context.component';
import { ScrollerCacheComponent } from './virtual-scrolling/scroller-cache/scroller-cache.component';
import { ScrollerDataSourceComponent } from './virtual-scrolling/scroller-data-source/scroller-data-source.component';
import { ScrollerFixedBufferComponent } from './virtual-scrolling/scroller-fixed-buffer/scroller-fixed-buffer.component';
import { ScrollerHorizontalComponent } from './virtual-scrolling/scroller-horizontal/scroller-horizontal.component';
import { ScrollerParentTagComponent } from './virtual-scrolling/scroller-parent-tag/scroller-parent-tag.component';
import { ScrollerStrategiesComponent } from './virtual-scrolling/scroller-strategies/scroller-strategies.component';

import { Roche7Component } from './roche7/roche7.component';


const routes: Routes = [
  { path: '', component: ScrollerComponent },
  { path: 'scroller', component: ScrollerComponent },
  { path: 'scrollerContext', component: ScrollerContextComponent },
  { path: 'scrollerCache', component: ScrollerCacheComponent },
  { path: 'scrollerDataSource', component: ScrollerDataSourceComponent },
  { path: 'scrollerFixedBuffer', component: ScrollerFixedBufferComponent },
  { path: 'scrollerHorizontal', component: ScrollerHorizontalComponent },
  { path: 'scrollerParentTag', component: ScrollerParentTagComponent },
  { path: 'scrollerStrategies', component: ScrollerStrategiesComponent },
  { path: 'roche7', component: Roche7Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
