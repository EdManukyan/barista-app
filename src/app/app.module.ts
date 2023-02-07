import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaristaShopModule } from './shared/modules/barista-shop/barista-shop.module';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { EFFECTS } from "./state/effects";
import { REDUCERS } from "./state/reducers";
import { BaristaReducer } from "./state/reducers/barista.reducer";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BaristaShopModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    ReactiveFormsModule,
    StoreModule.forRoot(REDUCERS, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: false,
      }
    }),
    EffectsModule.forRoot(EFFECTS),
    AppRoutingModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
