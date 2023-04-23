import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule } from '@ionic/angular';
import { Beer } from 'src/interface/beer';
import { BEERS } from 'src/data/beers';
import { HeaderCreateComponent } from 'src/app/components/header-create.component';

@Component({
    selector: 'app-beer-list',
    templateUrl: './beer-list.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderCreateComponent]
})
export class BeerListPage {
    @ViewChild(IonModal) modal: IonModal;

    beers = BEERS;      // data source
    beer?: Beer;        // ??? do i need this
    editing: Beer;      // the current selected or empty
    showModal = false;   // modal display state

    constructor() {
        this.setEditing(2);
        this.logStuff();
    }

    /**
     * display the selected item in modal
     * NK::BUG does not reset showModal on escape, must use cancel
     */
    display(id: number): void {
        this.setEditing(id);
        this.showModal = true;
    }

    /**
     * log a list of values
     */
    logStuff(): void {
        console.log('showModal: ' + this.showModal);
        console.log('editing.name: ' + this.editing.name);

    }

    //
    //
    //
    /**
     *
     */
    create($event: any) {
        // console.log($event);
    }
    edit(index: number) {
        // alert('edit item')
    }



    delete(index: number) {
        // alert('delete item')
    }

    /**
     * set the current selected item or ...
     */
    setEditing(id: number): void {
        this.editing = this.beers.find(item => item.id === id);
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    name: string;



    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }



    /**
     * handle the current selected item
     */
    handleEditing(e) {
        this.editing = e.target.value;
    }

    /**
     * close the modal and and reset state
     */
    cancel(isOpen: boolean): void {
        this.showModal = false;
        this.modal.dismiss(null, 'cancel');
        this.logStuff();
        // console.log(this.showModal);
    }



}
