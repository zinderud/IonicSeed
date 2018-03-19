import { Injectable } from "@angular/core";

import { SettingsDataService } from "./settings.service";
import { Observable } from "rxjs/Observable";
 
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/do";
import { Events } from "ionic-angular";
import { UserSettings } from "../../models/userSettings";
@Injectable()
export class ConverterService {
  public availableOptions;
  public currentSettings: UserSettings;
  public currentSettings$: Observable<UserSettings>;
  constructor(
    private settingsDataService: SettingsDataService,
    public events: Events
  ) {
    this.availableOptions = this.settingsDataService.AVALIABLE_OPTIONS;

    this.currentSettings = this.settingsDataService.getDefaults();
    events.subscribe("currentSettings", data => {
      this.currentSettings = data;
      console.log(" gelen", data);
    });
  }

  ngOnInit() {
    this.settingsDataService.load().subscribe(
      data => {
        this.currentSettings$ = this.settingsDataService.settings;

        this.currentSettings$.subscribe(data => {
          this.currentSettings = data;
        });
      },
      (error: any) => {},
      () => {}
    );
  }
 
   
  getCalculateWeights(value: number): number {
    let weights = this.currentSettings.weight;
    let result = 0.0;
    switch (weights) {
      case "kg":
        result = value;
        break;
      case "gr":
        result = value / 1000;
        break;
      case "lbs":
        result = (value*0.45359237);
    }
    return result;
  }
 
  getCalculateHeights(value: number): number {
    let height = this.currentSettings.height;
    let result = 0.0;
    switch (height) {
      case "m":
        result = value;
        break;
      case "cm":
        result = value / 100;
        break;
      case "inch":
        result =(value*0.0254);
    }
    return result;
  }
  ngOnDestroy() {
    this.currentSettings$;
  }
}
