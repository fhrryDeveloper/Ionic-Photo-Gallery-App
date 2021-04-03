import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(platform: Platform) {
    this.testvariable = platform.url();
    console.log("platform", this.testvariable)
   }

  testvariable: any;

  ngOnInit() {
    console.log("ngoninit1")
  }

  ionViewWillEnter(){
    console.log("ionviewwillenter2")
  }

  ionViewDidEnter(){
    console.log("ionviewdidenter3")
  }

  ionViewWillLeave(){
    console.log("ionviewwillleave4")
  }

  ionViewDidLeave(){
    console.log("ionviewdidleave5")
  }

  ngOnDestroy() {
    console.log("ngondestroy6")
  }

}
