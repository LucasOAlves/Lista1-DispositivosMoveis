import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ModalativaPage } from '../modalativa/modalativa';

/*
  Generated class for the Exercicio3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exercicio3',
  templateUrl: 'exercicio3.html'
})
export class Exercicio3Page {
  redes = [
    "Wifi1",
    "Wifi2",
    "Wifi3",
    "Wifi4",
    "Wifi5"
  ];
  senha;
  chosen;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrt : AlertController, public modalCrt:  ModalController) {
    this.chosen="";
  }

  showAlert(wifiName){
    if(this.chosen === wifiName){
      this.openModal(this.chosen);
    }else{
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
  }
  changeColor(wifiName){
    if(this.chosen === wifiName){
      return "dark";
    }else{
      return "light";
    }
  }

  openModal(wifiName){
    let modal = this.modalCrt.create(ModalativaPage,{
      wifiName: wifiName,
    });
    modal.present();
  }

}
