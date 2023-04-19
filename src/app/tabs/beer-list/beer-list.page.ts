import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Beer } from 'src/app/interface/beer';
// import { BEERS } from 'src/data/beers';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.page.html',
  styleUrls: ['./beer-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BeerListPage implements OnInit {

  // beer?: Beer = { id: 1, name: "gold" };
  // beers = BEERS;

  beer?: Beer;

  beers = [
    { id: 1, name: "Cascade Premium Larger" },
    { id: 2, name: "Fosters" },
    { id: 3, name: "Great Northern" },
    { id: 4, name: "Tooheys New" },
    { id: 5, name: "Tooheys Old" },
    { id: 6, name: "XXXX Bitter" },
    { id: 7, name: "XXXX Gold" }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
