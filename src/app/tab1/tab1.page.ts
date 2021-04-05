import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(platform: Platform,private dataService: DataService) {
    this.testvariable = platform.url();
    console.log("platform", this.testvariable)
   }

  public searchTerm: string = "";
  public items: any;
  testvariable: any;

  ngOnInit() {
    console.log("ngoninit1");
    this.setFilteredItems();
  }


  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
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
