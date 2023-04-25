import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule, ModalController } from '@ionic/angular';
import { HeaderCreateComponent } from 'src/app/components/header-create.component';
import { BEERS } from 'src/data/beers';
import { MYBEERS } from 'src/data/myBeers';
import { BeerModalComponent } from 'src/app/components/beer-modal.component';

@Component({
    selector: 'app-my-beers',
    templateUrl: './my-beers.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderCreateComponent]
})
export class MyBeersPage {
    @ViewChild(IonModal) modal: IonModal;

    myBeers = MYBEERS;      // data source
    beers = BEERS;          // data source

    constructor(private modalCtrl: ModalController) { }

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

}
