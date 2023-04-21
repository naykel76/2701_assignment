import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Beer } from 'src/interface/beer';
import { BEERS } from 'src/data/beers';
import { ToolbarAddComponent } from 'src/app/components/toolbar/toolbar-add.component';

@Component({
    selector: 'app-beer-list',
    templateUrl: './beer-list.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ToolbarAddComponent]
})
export class BeerListPage {

    beers = BEERS;
    beer?: Beer;

    constructor() { }

    add($event: any) {
        console.log($event);
        alert('open add modal')

        // open modal
    }


    edit(index: number) {
        alert('edit item')
    }
    delete(index: number) {
        alert('delete item')
    }


    // getCheapestAvailable(){ // }

}
