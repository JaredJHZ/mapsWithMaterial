import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//maps
import { AgmCoreModule } from '@agm/core';
//material
import {MaterialModuleModule} from './material-module.module';
//components
import { MapsComponent } from './components/maps/maps.component';
import { InfoComponent } from './components/maps/info.component';

import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    InfoComponent
  ],
  entryComponents:[InfoComponent]
  ,
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModuleModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcLCVUSuI4fuOIg394L5KNjksmeTzOSF0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
