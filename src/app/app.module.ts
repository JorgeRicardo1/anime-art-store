import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FrontPageComponent } from './Components/front-page/front-page.component';
import { DecorationBarComponent } from './Components/decoration-bar/decoration-bar.component';
import { PopularSectionComponent } from './Components/popular-section/popular-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FrontPageComponent,
    DecorationBarComponent,
    PopularSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
