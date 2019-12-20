import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { localStorageSyncReducer } from '@app/store/app-store.module';
import { TabsComponent } from '@app/components/tabs/tabs.page';
import { AuthGuard, DataChangesGuard } from '@app/guards';
import { AuthenticationService, ThemeService } from '@app/services';
import { HttpLoaderFactory } from '@app/factories/translate.factory';
import { MockModule } from '@app/mock/mock.module';
import { ToastService } from '@app/services/toast.service';
import { AppCoreModule } from '@app/core/app.core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { clearStorageReducer, reducers } from '@app/store/reducers';
import { EffectsModule } from '@ngrx/effects';

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, clearStorageReducer];

@NgModule({
    declarations: [AppComponent, TabsComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MockModule,
        AppCoreModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthGuard,
        AuthenticationService,
        ThemeService,
        ToastService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        DataChangesGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
