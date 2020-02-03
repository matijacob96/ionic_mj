import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"]
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(private alertCtrl: AlertController) {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Cancelar");
          }
        },
        {
          text: "Ok",
          handler: blah => {
            console.log("Boton ok");
          }
        }
      ]
    });

    await alert.present();
  }

  async presentTitle() {
    const input = await this.alertCtrl.create({
      header: 'Cambiar input',
      subHeader: 'Ingrese nuevo nombre de ventana',
      inputs: [
        {
          name: 'txtTitulo',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtTitulo;
          }
        }
      ]
    });

    await input.present();
  }

  ngOnInit() {}
}
