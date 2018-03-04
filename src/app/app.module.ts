import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { ClickerApp } from "./app.component";
import { ClickerList, PagesModule, Page2 } from "../pages";
import { MODULES, PROVIDERS ,DIRECTIVES} from "./app.imports";
import { PipesModule } from "../pipes/pipes.module";
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [DIRECTIVES,ClickerApp],
  imports: [
    MODULES,
    PipesModule,
    HttpClientModule,
    PagesModule,
    IonicModule.forRoot(ClickerApp),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [ClickerApp, ClickerList, Page2],
  providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
