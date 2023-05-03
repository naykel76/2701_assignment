import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HomePage implements OnInit {

    name: any;
    constructor(private storageService: StorageService) {

        // console.log(storageService.get('name'));

    }

    async ngOnInit() {
        // await this.storage.create();
        // await this.setName()
        await this.getName();
        // alert(await this.storageService.length())
    }

    async getName() {
        this.name = await this.storageService.get('name');
        console.log(this.name);
    }

    test() {
        this.getName();
        alert(this.name);
    }

    /**
     * add date and selected venue to logs
     */
    checkIn(venue_id: number): void {

        alert('user check in');
        // update checked in message
        // this.checkedIn = true;
    }

}
