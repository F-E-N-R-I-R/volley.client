import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Crop } from '@ionic-native/crop/ngx';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppCoreModule } from '@core/app.core.module';
import { MockModule } from '@app/mock/mock.module';
import { clearStorageReducer, reducers } from '@store/reducers';
import { localStorageSyncReducer } from '@store/app-store.module';
import { TabsComponent } from '@core/components';
import { AuthGuard } from '@core/guards';
import { ThemeService, ToastService, ImageService } from '@core/services';
import { HttpLoaderFactory } from '@core/factories';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';

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
        Camera,
        File,
        WebView,
        Crop,
        StatusBar,
        SplashScreen,
        AuthGuard,
        ThemeService,
        ToastService,
        ImageService,
        NativePageTransitions,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
