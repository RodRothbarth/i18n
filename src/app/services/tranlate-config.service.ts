import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  language: string;

  languageList = [
    {value:'en', viewValue:'English'},
    {value:'pt-br', viewValue:'Português'},
  ]


  constructor(private translateService: TranslateService) {
    this.translateService.use('pt-br')
   }

   changeLanguage(type: string){
     this.translateService.use(type)
   }
}
