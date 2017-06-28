import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Exercicio2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exercicio2',
  templateUrl: 'exercicio2.html'
})
export class Exercicio2Page {

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
