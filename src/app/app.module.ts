import { NgModule, ErrorHandler } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage  } from '../pages/welcome/welcome';
import { IndexPage        } from '../pages/index/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

export const config = {
      apiKey: "AIzaSyBqJmXTwDh7P2gwLSat0CSM3XlYYchltc8",
      authDomain: "telephonedirectory-d6a19.firebaseapp.com",
      databaseURL: "https://telephonedirectory-d6a19.firebaseio.com",
      projectId: "telephonedirectory-d6a19",
      storageBucket: "gs://telephonedirectory-d6a19.appspot.com",
      messagingSenderId: "913000341362"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    IndexPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    IndexPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite
  ]
})
export class AppModule {}
