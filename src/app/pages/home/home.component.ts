import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './../../services/tranlate-config.service' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private TranslateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }

  language: string;
  languageList = this.TranslateConfigService.languageList;

  changeLang(){
    this.TranslateConfigService.changeLanguage(this.language)
  }
}