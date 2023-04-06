import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'/main',pathMatch:'full'},
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
