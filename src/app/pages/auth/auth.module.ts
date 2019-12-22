import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from '@auth/login/login.page';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@auth/core/core.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        AuthCoreModule,
    ],
    declarations: [LoginPage],
    entryComponents: [],
})
export class AuthModule {
}
