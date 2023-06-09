import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PublicListComponent } from './components/public-list/public-list.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { PrivateListComponent } from './components/private-list/private-list.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateDestinationComponent } from './components/update-destination/update-destination.component';
import { DeleetDestinationComponent } from './components/delete-destination/delete-destination.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'publiclist',
    component: PublicListComponent
  },
  {
    path: 'privatelist',
    component: PrivateListComponent
  },
  {
    path: 'add-private-destination',
    component: AddDestinationComponent
  },
  {
    path: 'delete-account',
    component: DeleteUserComponent
  },
  {
    path: 'modify-public-destination/:id',
    component: UpdateDestinationComponent
  },
  {
    path: 'modify-private-destination/:id',
    component: UpdateDestinationComponent
  },
  {
    path: 'delete-public-destination/:id',
    component: DeleetDestinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
