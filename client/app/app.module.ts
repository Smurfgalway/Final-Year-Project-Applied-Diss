import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent }  from './home.component';
import { FriendsComponent }  from './friends.component';
import { FAQComponent } from './FAQ.component';
import { ProfileComponent }  from './profile.component';
import { CryptoMapComponent }  from './cryptomap.component';
import { tradingComponent} from './trading.component';
import { WalletComponent }  from './myWallet.component';
import { NewWalletComponent }  from './walletrequest.component';
import { SettingsComponent }  from './settings.component';
import { RegisterComponent }  from './register.component';
import { routing } from './app.routing';
import { AuthService } from './services/auth.service';
import { WelcomeComponent } from './welcome.component';
import { MapsMenuComponent } from './mapsmenu.component';
import { PostStatusComponent } from './poststatus.component';
import { RequestComponent } from './requestbitcoin.component';
import { TransactionsComponent } from './blockchainActivity.component';
import { LoginComponent } from './login.component'
import { MlabsSearchComponent } from './MlabsSearchResults.component';
import { ViewMapComponent } from './viewMap.component'
import { StatsComponent } from './blockstats.component'
import { PoolComponent } from './postpoolstatus.component'
import { SendBTCComponent } from './sendbtc.component'
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports:      [
     BrowserModule,
     routing,
     HttpModule,
     ReactiveFormsModule,
     FormsModule],
  declarations: 
  [ AppComponent,
    HomeComponent, 
    ProfileComponent,
    CryptoMapComponent,
    FriendsComponent,
    StatsComponent,
    WalletComponent,
    RequestComponent,
    PoolComponent,
    MlabsSearchComponent,
    PostStatusComponent,
    ViewMapComponent,
    SendBTCComponent,
    TransactionsComponent,
    MapsMenuComponent,
    NewWalletComponent,
    FAQComponent,
    tradingComponent,
    SettingsComponent,
    RegisterComponent,
    WelcomeComponent,
    LoginComponent ],
  exports: [  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
