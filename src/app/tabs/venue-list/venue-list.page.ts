import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VENUES } from 'src/data/venues';

@Component({
    selector: 'app-venue-list',
    templateUrl: './venue-list.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class VenueListPage implements OnInit {

    venues = VENUES;

    constructor() {

        console.log(this.venues)
     }

    ngOnInit() {
    }

}
