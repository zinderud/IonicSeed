 
 
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
 import { TranslateService } from '@ngx-translate/core';
import { PageService } from '../providers/util/page.service';
import { SettingsDataService } from "../providers/util/settings.service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private menu: MenuController;
  private platform: Platform;
  private splash: SplashScreen;
  private status: StatusBar;
  private translateService: TranslateService;
 
  public rootPage: any = HomePage;
  public pages: Array<{ title: string; component: any }>;


  constructor(
    platform: Platform,
    menu: MenuController,
    splash: SplashScreen,
    status: StatusBar,
    translateService: TranslateService,
    private pageService: PageService,
    private settingsDataService: SettingsDataService,
   
  ) {
    this.menu = menu;
    this.platform = platform;
    this.splash = splash;
    this.status = status;
    this.translateService = translateService;
    this.initializeApp();
    this.initTranslate();
    // used for an example of ngFor and navigation
    this.pages = pageService.getPages();
  }

  initializeApp(): Promise<void> {
    return this.platform.ready().then(() => {
 /*      this.translateService.setDefaultLang("tr");
      this.translateService.use("tr"); */
      this.settingsDataService.onUpdate$.subscribe(() => this.initTranslate());

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.status.styleDefault();
      this.splash.hide();
     
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component); 
  
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translateService.setDefaultLang('tr');
    this.settingsDataService.settings.subscribe(settings => {
      this.translateService.use(settings.language); // Set your language here

       
     
    });
  }
}
