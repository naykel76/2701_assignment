import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

    constructor() { }

    ngOnInit() { }

    /**
     * add date and selected venue to logs
     */
    checkIn(venue_id: number): void {

        alert('user check in');
        // update checked in message
        // this.checkedIn = true;
    }

}
