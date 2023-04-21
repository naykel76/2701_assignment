import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Beer } from 'src/interface/beer';
import { BEERS } from 'src/data/beers';

@Component({
    selector: 'app-beer-list',
    templateUrl: './beer-list.page.html',
    styleUrls: ['./beer-list.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class BeerListPage implements OnInit {

    beers = BEERS;
    beer?: Beer;

    constructor() { }
    ngOnInit() { }

    add() {
        alert('add item')
    }

    edit(index: number) {
        alert('edit item')
    }
    delete(index: number) {
        alert('delete item')
    }

}
