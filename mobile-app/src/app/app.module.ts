import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogIn } from '../pages/log-in/log-in';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogIn
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicSwipeAllModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogIn
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
