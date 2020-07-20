import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";
import {RegisterUserComponent} from "../register-user/register-user.component";

const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent,
    children: [
      {
        path: 'pages/auth/forgot-password',
        component: ForgotPasswordComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
