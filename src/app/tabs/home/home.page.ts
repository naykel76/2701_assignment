import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonPicker, IonPopover, IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {

    // name: 'Billy McDoogle';
    // email: 'billy_mac@gmail.com';
    // birthdayForHumans = '23/09/1976';

    constructor() { }

    /**
     * add date and selected venue to logs
     */
    checkIn(venue_id: number): void {

        alert('user check in');
        // update checked in message
        // this.checkedIn = true;
    }

}
