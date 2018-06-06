import { BlockchainHttpService } from './services/blockchain-http.service';
import { BlockchainService } from './services/blockchain.service';
import { AuthGuardService } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AccountComponent } from './components/account/account.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    TransactionTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BlockchainHttpService,
    BlockchainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
