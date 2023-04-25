import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule } from '@ionic/angular';
import { HeaderCreateComponent } from 'src/app/components/header-create.component';
import { BEERS } from 'src/data/beers';
import { MYBEERS } from 'src/data/myBeers';
import { log } from 'console';

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
    editing?: any;          // the current selected or empty
    showModal = false;      // modal display state


    // for data binding
    beer = {
        //     'beer_id': null,
        //     'is_favourite': 0,
        'name': '',
        //     'image': '',
        //     'venues': []
    }

    selectedBeer: any;      // selected beer before save

    constructor() {
        // this.setEditing(12);
        this.logStuff();
    }

    /**
     * display the selected (editing) beer
     */
    display(id: number): void {
        this.setEditing(id);
        this.showModal = true;
    }


    /**
     *
     */

    save() {

        this.modal.dismiss(null, 'save'); // this may be redundant

        this.modal.onDidDismiss()
            .then((res) => {
                console.log(res);

                // alert();
                // if (res.role == 'cancel') {
                //     console.log('do nothing');
                // } else {
                //     this.contacts.push(res.data);
                // }
            });
    }


    /**
     * set the selected beer from select options
     */
    onSelectChange(event: any): void {
        this.selectedBeer = event.detail.value;
    }


    /**
     * open modal with add options
     */
    create($event: any, $type: string) {
        this.showModal = true;
    }

    /**
     * set selected beer from 'myBeers' display or edit
     * NK?? should this be an async function to prevent editing modal firing before data is resolved?
    */
    setEditing(id: number): void {
        this.editing = this.myBeers.find(item => item.beer_id === id);
    }

    /**
     * log a list of values
     */
    logStuff(): void {
        console.clear();
        console.log('showModal: ' + this.showModal);
        console.log(this.myBeers);
        if (this.editing != undefined) {
            console.log('editing.name: ' + this.editing.name);
            console.log('editing.is_favourite: ' + this.editing.is_favourite);
        } else {
            console.log('editing: ' + this.editing);
        }
    }

    edit(index: number) {
        alert('edit');
    }


    /**
     * delete selected item
     *
     * NK::TD
     * - get this to handle deleting both the beer and venues
     * - confirmation modal
     * - confirm delete message
     */
    delete(i: number) {
        this.myBeers.splice(i, 1);
    }

    /**
     * close the modal and reset state
     */
    cancel(event: Event): void {
        this.showModal = false;
        this.modal.dismiss(null, 'cancel'); // this may be redundant
    }

}
