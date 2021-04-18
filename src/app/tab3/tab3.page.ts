import { ElementRef, Component, ViewChild } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('paragraph') p: ElementRef;
  inner: any;
  constructor(public modalController: ModalController, public animationCtrl: AnimationController, public gestureCtrl: GestureController) {
  }

  playfunc() {
    this.animationCtrl.create()
   .addElement(document.querySelector('.square'))
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)').play();
  }

  async viewModal() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    const modal = await this.modalController.create({
      component: ModalPage,
      enterAnimation,
      leaveAnimation
    });
    return await modal.present();
  }

}
