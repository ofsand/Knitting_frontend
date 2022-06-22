import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LargeFooterComponent } from './large-footer/large-footer.component';
import { ShortFooterComponent } from './short-footer/short-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LargeFooterComponent,
    ShortFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
