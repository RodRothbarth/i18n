import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutes } from './pages/home/home.routes';
import { SettingsComponent } from './pages/settings/settings.component';
import { SettingsRoutes } from './pages/settings/setting.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function LoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(HomeRoutes),
    RouterModule.forChild(SettingsRoutes),
    TranslateModule,
    MatSelectModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: LoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  exports:[HomeComponent, SettingsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
