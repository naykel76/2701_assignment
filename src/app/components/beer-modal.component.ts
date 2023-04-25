import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MyBeer } from 'src/interface/myBeer';

import { BEERS } from 'src/data/beers';
import { BeerVenuesComponent } from './beer-venues.component';

@Component({
    selector: 'nk-beer-modal',
    templateUrl: './beer-modal.component.html',
    standalone: true,
    imports: [IonicModule, FormsModule, CommonModule, BeerVenuesComponent]
})
export class BeerModalComponent implements OnInit {

    beers = BEERS;          // data source for select
    editing: boolean;       // status to define layout
    selectedBeer: any;      // selected beer before save

    beer: MyBeer = {
        beer_id: null,
        name: '',
        image: '',
        venues: [],
    };

    constructor(private modal: ModalController) { }

    ngOnInit() { }

    /**
     * set the selected beer from select options
     */
    onSelectChange(event: any): void {
        this.selectedBeer = event.detail.value;
    }

    /**
     * close the modal and set data and role
     */
    save() {
        this.modal.dismiss(this.beer, 'saved');
    }

    /**
     * close the modal setting data = null, and role = cancel
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }


}


