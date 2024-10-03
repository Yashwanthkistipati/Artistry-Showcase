import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WaterPaintsComponent } from './water-paints/water-paints.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { SunsetsComponent } from './sunsets/sunsets.component';
import { NaturePicsComponent } from './nature-pics/nature-pics.component';


const routes: Routes = [
  { path: 'water-paints', component: WaterPaintsComponent },
  { path: 'portraits', component: PortraitsComponent },
  { path: 'sunsets', component: SunsetsComponent },
  { path: 'nature-pics', component: NaturePicsComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    WaterPaintsComponent,
    PortraitsComponent,
    SunsetsComponent,
    NaturePicsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
