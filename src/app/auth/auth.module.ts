import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent, RegisterComponent, LogoutComponent } from './pages';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
