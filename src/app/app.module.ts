import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/Input/button/button.component';
import { ChampionContainerComponent } from './components/champion-container/champion-container.component';
import { BodyComponent } from './components/body/body.component';
import { ChampionDisplayComponent } from './components/champion-display/champion-display.component';
import { MasteryDisplayComponent } from './components/mastery-display/mastery-display.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ChampionContainerComponent,
    BodyComponent,
    ChampionDisplayComponent,
    MasteryDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
