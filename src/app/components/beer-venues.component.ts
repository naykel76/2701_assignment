import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { VENUES } from 'src/data/venues';

@Component({
    selector: 'nk-beer-venues',
    templateUrl: './beer-venues.component.html',
    standalone: true,
    imports: [IonicModule, CommonModule]
})

export class BeerVenuesComponent implements OnInit {

    @Input() beerVenues: any; //

    venues = VENUES;        // data source for select

    // this is only required for testing and development
    beer = {
        "beer_id": 12,
        "is_favourite": 1,
        "name": "XXXX Gold",
        "image": "xxxx-gold.jpg",
        "venues": [
            {
                "venue_id": 8,
                "name": "Acacia Ridge Hotel",
                "price": 9.38,
            },
            {
                "venue_id": 1,
                "name": "Runcorn Tavern",
                "price": 10.49,
            },
            {
                "venue_id": 4,
                "name": "Greenbank RSL",
                "price": 7.95,
            }
        ]
    };

    constructor() {




    }

    ngOnInit() { }

    // this only adds the venue, it does not save it???
    addVenue() {
        alert('add venue');
    }

    /**
    * delete selected venue
    */
    delete(id: number): void {
        alert('remove venue');
        // this.beerVenues = this.beerVenues.filter(item => item.venue_id !== id)
    }

}
