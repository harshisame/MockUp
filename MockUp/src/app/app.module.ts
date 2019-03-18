import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockUpComponent } from './mock-up/mock-up.component';
import { NavBarComponent } from 'src/app/mock-up/nav-bar/nav-bar.component';
import { PrimaryFooterComponent } from 'src/app/mock-up/primary-footer/primary-footer.component';
import { SecondaryFooterComponent } from 'src/app/mock-up/secondary-footer/secondary-footer.component';
import { MockBodyComponent } from 'src/app/mock-up/mock-body/mock-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MockUpComponent,
    NavBarComponent,
    PrimaryFooterComponent,
    SecondaryFooterComponent,
    MockBodyComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
