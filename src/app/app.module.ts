import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TransferPage } from '../pages/transfer/transfer';
import { SettingsPage } from '../pages/settings/settings';
import { TransactionPage } from '../pages/transaction/transaction';
import { ConfirmTransPage } from '../pages/confirm-trans/confirm-trans';
import { TransHistoryPage } from '../pages/trans-history/trans-history';
import { CreateAccountPage} from '../pages/create-account/create-account';
import { AccountCreationPage } from '../pages/account-creation/account-creation';
import { ConfirmCreationPage } from '../pages/confirm-creation/confirm-creation';
import { AccountInfoPage} from '../pages/account-info/account-info';
import { Account1Page } from '../pages/account1/account1';
import { Account2Page } from "../pages/account2/account2";
import { Account3Page } from '../pages/account3/account3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransferPage,
    SettingsPage,
    TransactionPage,
    ConfirmTransPage,
    TransHistoryPage,
    CreateAccountPage,
    AccountCreationPage,
    ConfirmCreationPage,
    AccountInfoPage,
    Account1Page,
    Account2Page,
    Account3Page,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransferPage,
    SettingsPage,
    TransactionPage,
    ConfirmTransPage,
    TransHistoryPage,
    CreateAccountPage,
    AccountCreationPage,
    ConfirmCreationPage,
    AccountInfoPage,
    Account1Page,
    Account2Page,
    Account3Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
