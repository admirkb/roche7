import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollingModule } from './virtual-scrolling/virtual-scrolling.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FormsModule } from '@angular/forms';

import { BugsDeleteDialogueComponent } from './bugs/bugs-delete-dialogue/bugs-delete-dialogue.component';
import { BugsAddDialogueComponent } from './bugs/bugs-add-dialogue/bugs-add-dialogue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';

import { Roche7Module } from './roche7/roche7.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VirtualScrollingModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 80 //  Retains last 80 states
    }),
    EffectsModule.forRoot([]),
    MaterialDesignModule,
    Roche7Module
  ],
  providers: [],
  entryComponents: [BugsDeleteDialogueComponent, BugsAddDialogueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
