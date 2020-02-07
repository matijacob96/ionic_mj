import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( evento ){

    const popover = await this.popoverCtrl.create({
      component: PopInfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const {data} = await popover.onDidDismiss();

    const {data} = await popover.onWillDismiss();

    console.log('Padre: ', data)

  }

}
