import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule, ModalController } from '@ionic/angular';
import { HeaderCreateComponent } from 'src/app/components/header-create.component';
import { MYBEERS } from 'src/data/myBeers';
import { BeerModalComponent } from 'src/app/components/beer-modal.component';
import { BeerVenuesComponent } from 'src/app/components/beer-venues.component';

@Component({
    selector: 'app-my-beers',
    templateUrl: './my-beers.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderCreateComponent, BeerVenuesComponent]
})
export class MyBeersPage {

    myBeers = MYBEERS;      // data source

    // this is only required for testing and development
    beerSample = {
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

    constructor(private modalCtrl: ModalController) {



    }

    /**
     * Open the modal to add beer
     */
    async addBeer() {

        const modal = await this.modalCtrl.create({
            component: BeerModalComponent,
            componentProps: { editing: false }
        })

        modal.onDidDismiss()
            .then((res) => {
                if (res.role == 'cancel') {
                    console.log('do nothing');
                } else {
                    console.log(res.data);
                }
            });

        return modal.present();
    }

    /**
     * Open the modal to add beer
     */
    async displayBeer(beer: object) {

        const modal = await this.modalCtrl.create({
            component: BeerModalComponent,
            componentProps: { editing: true, beer: beer }
        })

        modal.onDidDismiss()
            .then((res) => {
                if (res.role == 'cancel') {
                    console.log('do nothing');
                } else {
                    // edit and back actions
                    console.log(res.data);
                }
            });

        return modal.present();
    }

    /**
    * delete selected beer
    */
    delete(id: number): void {
        this.myBeers = this.myBeers.filter(item => item.beer_id !== id)
    }

    // get the lowest price to display with each beer
    // getLowest() {
    //     for (const beer of MYBEERS) {
    //         let lowestPrice = Infinity;
    //         for (const venue of beer.venues) {
    //             if (venue.price < lowestPrice) {
    //                 lowestPrice = venue.price;
    //             }
    //         }
    //         console.log(`${beer.name}: ${lowestPrice}`);
    //     }
    // }

}
