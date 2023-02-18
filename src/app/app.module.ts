import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { SourceComponent } from './components/source/source.component';
import { TypeZoneComponent } from './components/main/type-zone/type-zone.component';
import { ZoneUrbanComponent } from './components/main/zone-urban/zone-urban.component';
import { ZoneRuralComponent } from './components/main/zone-rural/zone-rural.component';
import {BrowserModule} from "@angular/platform-browser";
import {Routes, RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: MainComponent,children:[

      { path: 'rural', component: ZoneRuralComponent },
      { path: 'urban', component: ZoneUrbanComponent },
    ] },
  { path: 'source', component: SourceComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    SourceComponent,
    TypeZoneComponent,
    ZoneUrbanComponent,
    ZoneRuralComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
