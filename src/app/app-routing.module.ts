import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolaoGuard } from 'src/guards/bolao.guard';
import { BolaoComponent } from './bolao/bolao.component';
import { GruposComponent } from './grupos/grupos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: GruposComponent },
  { path: 'grupos', component: GruposComponent, data: { animationState: 'Two' } },
  { path: 'login', component: LoginComponent, data: { animationState: 'One' } },
  { path: 'bolao', component: BolaoComponent, canActivate: [BolaoGuard] , data: { animationState: 'Three' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
