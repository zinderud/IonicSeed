import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  ModalController
} from "ionic-angular";

import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

import { TranslateService } from "@ngx-translate/core";
import { SettingsDataService } from "../../providers/util/settings.service";

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage implements OnInit, OnDestroy {
  public objectKeys = Object.keys;

  public availableOptions;
  public currentSettings;

  private unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private navCtrl: NavController,
    private settingsDataProvider: SettingsDataService,
    private alertCtrl: AlertController,
    private translateService: TranslateService,
    private modalCtrl: ModalController
  ) {
    this.availableOptions = this.settingsDataProvider.AVALIABLE_OPTIONS;
  }

  private clearData() {
    this.settingsDataProvider.clearData();
    this.navCtrl.setRoot("IntroPage");
  }

  onUpdate() {
    this.settingsDataProvider.save(this.currentSettings);
  }

  ionViewDidLoad() {
    this.settingsDataProvider.settings
      .takeUntil(this.unsubscriber$)
      .do(settings => (this.currentSettings = settings))
      .subscribe();
  }

  ngOnInit() {
    this.settingsDataProvider.onUpdate$
      .takeUntil(this.unsubscriber$)
      .do(settings => (this.currentSettings = settings))
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
