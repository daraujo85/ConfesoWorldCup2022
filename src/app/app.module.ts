import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatchComponent } from 'src/components/match/match.component';
import { BolaoGuard } from 'src/guards/bolao.guard';

import { GroupComponent } from '../components/group/group.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BolaoComponent } from './bolao/bolao.component';
import { GruposComponent } from './grupos/grupos.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    MatchComponent,
    BolaoComponent,
    GruposComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [BolaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
