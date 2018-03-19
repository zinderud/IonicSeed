
import { Injectable } from '@angular/core';
import { HomePage, ListPage } from '../../pages';
import { SettingsPage } from '../../pages/settings/settings';
 
  

@Injectable()
export class PageService   {
 
 

    getPages = (): Array<any> => {
      return [
        {"title" : "MENU.HOME",  "component": HomePage, "singlePage":false},
        {"title" : "MENU.LIST",  "component":ListPage, "singlePage":false},
        {"title" : "SETTINGS_PAGE.SETTINGS",  "component":SettingsPage, "singlePage":false},
      
        
      ];
    };

 
 
  
    
}


