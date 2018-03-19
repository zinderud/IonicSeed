
import { UserSettings } from './../../models/userSettings';
 

import { Component, OnDestroy, OnInit, ChangeDetectorRef }        from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable }       from 'rxjs/Observable';
 
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import { SettingsDataService } from '../../providers/util/settings.service';
@Component({
  selector: 'language-picker',
  templateUrl: './languagePicker.html',
})

export class LanguagePicker  implements OnInit, OnDestroy{
  public objectKeys = Object.keys;
  public availableOptions;
  public currentSettings ;
  private unsubscriber$: Subject<void> = new Subject<void>();
  public language: string;
 
  public currentSettings$:Observable<UserSettings> ;
  constructor(translate: TranslateService,
    private changeDetector: ChangeDetectorRef,
    private settingsDataService: SettingsDataService) {
 
    this.availableOptions = this.settingsDataService.AVALIABLE_OPTIONS;
this.currentSettings=this.settingsDataService.getDefaults().language

    
    
  }

 
 

  onUpdate() {
    this.settingsDataService.save(this.currentSettings);
  }

  ionViewDidLoad() {
    this.settingsDataService.settings
      .takeUntil(this.unsubscriber$)
      .do((settings) => this.currentSettings = settings)
      .subscribe();
  }

  ngOnInit() {
    this.settingsDataService.onUpdate$
      .takeUntil(this.unsubscriber$)
      .do((settings) => this.currentSettings = settings)
      .subscribe();

      this.settingsDataService.load().subscribe(
        data=>{
  
          this.currentSettings$= this.settingsDataService.settings
            
          console.log("currentSettings$",this.currentSettings$)
  
  
          this.currentSettings$.subscribe(data=>{
            this.currentSettings=data;
  
          })
          console.log("ionViewDidLoad",this.currentSettings)
         
        },
        (error:any)=>{
          console.log("dsa",error)
        },
        ()=>{
          
        }
      )

    
  }

  ngAfterViewChecked() {    
    
   
  /*   this.changeDetector.detectChanges();  */

  }


  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
