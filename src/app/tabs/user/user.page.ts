import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

    user: User = {
        name: 'Billy McDoogle',
        email: 'billy_mac@gmial.com'
    }

    constructor() { }

    ngOnInit() {
    }

    updateProfile() {
        console.log('change Profile clicked');
    }
    updateAvatar() {
        console.log('change avatar clicked');
    }

}
