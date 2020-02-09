import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersMockProvider } from '@app/mock/users.mock.provider';
import { TeamsMockProvider } from '@app/mock/teams.mock.provider';
import { NewsMockProvider } from '@app/mock/news.mock.provider';
import { EventsMockProvider } from '@app/mock/events.mock.provider';
import { ActivityMockProvider } from '@app/mock/activities.mock.provider';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [
        UsersMockProvider,
        TeamsMockProvider,
        NewsMockProvider,
        EventsMockProvider,
        ActivityMockProvider,
    ],
    exports: []
})
export class MockModule {}
