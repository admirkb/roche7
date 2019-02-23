import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
// import { bugReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature('bug', bugReducer)
  ],
  declarations: []
})
export class BugModule {}