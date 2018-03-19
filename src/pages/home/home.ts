 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../providers/util/storage.service';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public  title="TITLE.HOMEPAGE";
  constructor(public navCtrl: NavController, translate: TranslateService,  private storageService:StorageService,  ) {
 
  }

}
 