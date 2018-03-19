
import { NgModule }         from '@angular/core';
import { TranslateModule }  from '@ngx-translate/core';
import { IonicModule }      from 'ionic-angular';
import { ComponentsModule } from '../components';
import { ListPage ,HomePage} from './';
 
 

@NgModule({
  declarations: [HomePage,ListPage
  
  ],
  imports: [ IonicModule, ComponentsModule, TranslateModule ],
  exports: [
    HomePage,ListPage
  ],
  entryComponents: [ HomePage,
    ListPage],
  providers: [ ],
})

export class PagesModule {}
