import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MyBeer } from 'src/interface/myBeer';



@Component({
    selector: 'nk-beer-modal',
    templateUrl: './beer-modal.component.html',
    standalone: true,
    imports: [IonicModule, FormsModule, CommonModule]
})
export class BeerModalComponent implements OnInit {

    beer: MyBeer = {
        beer_id: null,
        name: '',
        image: '',
        venues: [],
    };

    constructor(private modal: ModalController) { }

    ngOnInit() { }

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


    // this only adds the venue, it does not save it???
    addVenue() {
        console.log('add venue');
    }

}


