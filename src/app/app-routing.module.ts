import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: 'artikl', component: ArtiklComponent},
  {path: 'dobavljac', component: DobavljacComponent, data: {animation: 'FilterPage'} },
  {path: 'porudzbina', component: PorudzbinaComponent, data: {animation: 'FilterPage'} },
  {path: 'pomoc', component: HelpComponent, data: {animation: 'FilterPage'} },
  {path: 'autor', component: AuthorComponent, data: {animation: 'AuthorPage'} },
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  {path: '', redirectTo: '/home', pathMatch: 'full', data: {animation: 'FilterPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
  BrowserAnimationsModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
