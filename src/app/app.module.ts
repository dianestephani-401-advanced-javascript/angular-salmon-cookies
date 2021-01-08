import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProofOfLifeComponent } from './proof-of-life/proof-of-life.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationComponent } from './location/location.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    ProofOfLifeComponent,
    NavbarComponent,
    LocationComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
