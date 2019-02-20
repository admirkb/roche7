import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollingModule } from './virtual-scrolling/virtual-scrolling.module'
import { TodoMachineComponent } from './todo-machine/todo-machine.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FormsModule } from '@angular/forms';

import { reducers } from './store/reducers';
import { TodoModule } from './todo.module';
import { todoReducer } from './store/reducers/todo.reducer';
import { BugsMachineComponent } from './bugs-machine/bugs-machine.component';

import { BugModule } from './bug.module';
import { BugsModule } from './bugs/bugs.module';
import { BugsDeleteDialogueComponent } from './bugs/bugs-delete-dialogue/bugs-delete-dialogue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoMachineComponent,
    BugsMachineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VirtualScrollingModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 80 //  Retains last 80 states
    }),
    EffectsModule.forRoot([]),
    TodoModule,
    // BugModule,
    BugsModule,
    MaterialDesignModule
  ],
  providers: [],
  entryComponents: [BugsDeleteDialogueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
