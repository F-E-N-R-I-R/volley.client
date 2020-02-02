import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersListPage } from '@users/pages/list/users-list.page';
import { UsersCoreModule } from '@users/core/core.module';
import { UsersRoutingModule } from '@users/users-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UsersCoreModule,
        UsersRoutingModule,
        TranslateModule,
    ],
  declarations: [UsersListPage]
})
export class UsersModule {}
