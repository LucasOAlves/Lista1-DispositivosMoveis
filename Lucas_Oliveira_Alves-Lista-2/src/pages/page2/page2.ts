import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  redes = [
    "Wifi1",
    "Wifi2",
    "Wifi3",
    "Wifi4",
    "Wifi5"
  ];
  senha;
  chosen;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrt : AlertController) {
    this.chosen="";
  }

  showAlert(wifiName){
    let alert = this.alertCrt.create()
    alert.setTitle(wifiName);
    alert.setSubTitle('Informe a senha');
    alert.addInput({
      type: 'password',
      placeholder : 'Informe a senha',
      name: 'password'
    });
    alert.addButton({
      text: 'Conectar',
      handler: (userPassword) =>{
        this.senha = userPassword.password
      }
    });
    this.chosen = wifiName;
    alert.present();
  }
  changeColor(wifiName){
    if(this.chosen === wifiName){
      return "dark";
    }else{
      return "light";
    }

  }
}
