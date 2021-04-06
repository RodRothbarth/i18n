import { Component, OnInit } from '@angular/core';
import {TranslateConfigService} from './../../services/tranlate-config.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private TranslateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }
  changeLang(type: string){
    this.TranslateConfigService.changeLanguage(type)
  }
}
