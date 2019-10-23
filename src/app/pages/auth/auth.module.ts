import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login/login.page';
import { AuthRoutingModule } from './auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@app/pages/auth/core/core.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        TranslateModule,
        AuthCoreModule,
    ],
    declarations: [LoginPage]
})
export class AuthModule {
}
