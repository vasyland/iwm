import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ScenariosComponent } from './components/scenarios/scenarios.component';
import { SymbolStateBuyListService } from './services/symbol-state-buy-list.service';
import { BuyListComponent } from './components/buy-list/buy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { FlexboxBasicsComponent } from './components/flexbox-basics/flexbox-basics.component';
import { FlexLatestNewsComponent } from './components/flex-latest-news/flex-latest-news.component';
import { CountryRatingComponent } from './components/country-rating/country-rating.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DrumComponent } from './components/drum/drum.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserScenarioService } from './services/user-scenario.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScenariosComponent,
    BuyListComponent,
    SimpleCardComponent,
    FlexboxBasicsComponent,
    FlexLatestNewsComponent,
    CountryRatingComponent,
    NavigationComponent,
    DrumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [SymbolStateBuyListService, BuyListComponent, UserScenarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
