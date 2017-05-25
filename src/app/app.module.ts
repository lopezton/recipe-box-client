import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { AddDrinkComponent } from './drinks/add-drink.component';
import { DrinkDetailComponent } from './drinks/drink-detail.component';
import { DrinkListViewComponent } from './drinks/drink-list-view.component';
import { EditDrinkComponent } from './drinks/edit-drink.component';

import { DrinkService } from './drinks/drink.service';
import { SearchBoxComponent } from './search-box.component';

import { HasDrinkNamePipe } from './pipes/has-drink-name.pipe';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    AddDrinkComponent,
    EditDrinkComponent,
    DrinkDetailComponent,
    DrinkListViewComponent,
    SearchBoxComponent,
    HasDrinkNamePipe
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DrinkService
  ]
})
export class AppModule { }
