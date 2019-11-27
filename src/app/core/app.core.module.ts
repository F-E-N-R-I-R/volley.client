import { NgModule } from '@angular/core';
import { ExponentialStrengthPipe } from '@app/core/pipes/test.pipe';

@NgModule({
    declarations: [ExponentialStrengthPipe],
    exports: [ExponentialStrengthPipe],
})
export class AppCoreModule {
}
