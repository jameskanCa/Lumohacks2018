import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';


@Component({
  templateUrl: 'log-in.html'
})

export class LogIn {
  constructor(public navCtrl: NavController) {
    
  }

  loadScreen() {
      this.navCtrl.setRoot(HomePage);
  }



}