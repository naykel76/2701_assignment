import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule } from '@ionic/angular';
import { Beer } from 'src/interface/beer';
import { BEERS } from 'src/data/beers';
import { HeaderCreateComponent } from 'src/app/components/header-create.component';
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

    constructor() {
        // this.setEditing(2);
        this.logStuff();
    }

    /**
     * display the selected item in modal
     * NK::BUG does not reset showModal on escape, must use cancel
     */
    display(id: number): void {
        this.setEditing(id);
        this.showModal = true;
        this.logStuff();
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


    create($event: any) {
        alert('create');
    }

    edit(index: number) {
        alert('edit');
    }

    delete(index: number) {
        alert('delete');
    }




}
