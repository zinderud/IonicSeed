import { PROVIDERS, PAGEMODULE } from './app.imports';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from "@angular/common/http";
 
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MyApp } from './app.component';
 
import { PagesModule } from '../pages';
import { IonicStorageModule,Storage } from '@ionic/storage';
 
import { ComponentsModule } from '../components';
import { SettingsDataService } from '../providers/util/settings.service';
import { ConverterService } from '../providers/util/converter.service';
import { StorageService } from '../services';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,PAGEMODULE,
    PagesModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  providers: [ ...PROVIDERS,
    {provide: StorageService, useClass: StorageService, deps: [Storage]},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsDataService,ConverterService
  ]
})
export class AppModule {}
