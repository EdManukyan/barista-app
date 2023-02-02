import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaristaShopModule } from './shared/modules/barista-shop/barista-shop.module';
import { NavbarModule } from './shared/modules/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BaristaShopModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
