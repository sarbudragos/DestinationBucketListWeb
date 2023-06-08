import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PublicListComponent } from './public-list/public-list.component';
import { PrivateListComponent } from './private-list/private-list.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    RegisterPageComponent,
    PublicListComponent,
    PrivateListComponent,
    AddDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
