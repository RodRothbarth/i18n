import { Component } from '@angular/core';
import { TranslateConfigService } from './services/tranlate-config.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(private translateService: TranslateConfigService) {
    // this.translateService.use('pt-br')
   }

  //  changeLanguage(type: string){
  //    this.translateService.use(type)
  //  }
  
  
}
