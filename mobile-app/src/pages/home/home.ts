import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { storage, initializeApp } from 'firebase';
import {FIREBASE_CONFIG} from "../../app/firebase.config";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myphoto:any;

  constructor(public navCtrl: NavController, private camera: Camera) {
    initializeApp(FIREBASE_CONFIG);
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,

      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = "data:image/jpeg;base64," + imageData;
      const pictures = storage().ref('pictures');
      pictures.putString(this.myphoto, 'data_url');
    }, (err) => {
      // Handle error
    });
  }

}
