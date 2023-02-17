import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { TypeZoneComponent } from './components/main/type-zone/type-zone.component';
import { ZoneUrbanComponent } from './components/main/zone-urban/zone-urban.component';
import { ZoneRuralComponent } from './components/main/zone-rural/zone-rural.component';
import {BrowserModule} from "@angular/platform-browser";
import {Routes, RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: 'rural', component: ZoneRuralComponent },
  { path: 'urban', component: ZoneUrbanComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    MainHomeComponent,
    TypeZoneComponent,
    ZoneUrbanComponent,
    ZoneRuralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
