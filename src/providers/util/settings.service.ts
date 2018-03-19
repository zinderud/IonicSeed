import { StorageService } from "./storage.service";
import { Injectable } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeUntil";
import 'rxjs/add/observable/of';
import lodash from "lodash";
import { UserSettings } from "../../models/userSettings";
 

@Injectable()
export class SettingsDataService {
  public onUpdate$: Subject<UserSettings> = new Subject();

  private _settings: UserSettings;

  public AVALIABLE_OPTIONS = {
    languages: {
      'tr': "Türkce",
      'en': "English"
    },
    weights:{
      "kg":"kg",
      "gr":"gr",
      "lbs":"lbs"
    },
    heights:{
      "m":"m",
      "cm":"cm",
      "inch":"inch"
    }
  };

  constructor(
    private _storageProvider: StorageService,
    private translateService: TranslateService
  ) {
    this.load().subscribe(data => {
      this._settings = data;
      this.save();
    });
  }

  public get settings() {
    if (lodash.isEmpty(this._settings)) {
      return this.load();
    } else {
      return Observable.of(this._settings);
    }
  }

  public getDefaults(): UserSettings {
    const cultureLang = this.translateService.getBrowserCultureLang();
    const browserLang = this.translateService.getBrowserLang();
    const appLang = this.AVALIABLE_OPTIONS.languages[cultureLang]   ? cultureLang  : this.AVALIABLE_OPTIONS.languages[browserLang] ? browserLang : "tr";
    const height="m";
    const weight="kg";
    return UserSettings.defaults(appLang,height,weight);
  }

  public save(options?: UserSettings): Observable<any> {
    const settings = options || this._settings;

    for (const prop in options) {
      this._settings[prop] = settings[prop];
    }

    if (options) {
      this.onUpdate$.next(this._settings);
    }
    return this._storageProvider.set(
      "medical",
      this._settings
    );
  }

  public clearData(): void {
    this._storageProvider.clear();
  }

  public load(): Observable<UserSettings> {
    return Observable.create(observer => {
      this._storageProvider
        .getObject("medical")
        .subscribe(response => {
          let data = response;

          if (lodash.isEmpty(data)) {
            data = this.getDefaults();
          }

          observer.next(data);
        });
    });
  }
}
