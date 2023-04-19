import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.page.html',
  styleUrls: ['./beer-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BeerListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
