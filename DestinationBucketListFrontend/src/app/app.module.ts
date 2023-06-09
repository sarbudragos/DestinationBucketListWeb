import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PublicListComponent } from './components/public-list/public-list.component';
import { PrivateListComponent } from './components/private-list/private-list.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateDestinationComponent } from './components/update-destination/update-destination.component';
import { DeleteDestinationComponent } from './components/delete-destination/delete-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    RegisterPageComponent,
    PublicListComponent,
    PrivateListComponent,
    AddDestinationComponent,
    DeleteUserComponent,
    UpdateDestinationComponent,
    DeleteDestinationComponent
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
