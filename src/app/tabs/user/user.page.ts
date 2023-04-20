import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

    user: User = {
        name: 'Billy McDoogle',
        email: 'billy_mac@gmial.com'
    }

    actionSheetButtons = [
        {
            text: 'Take Photo',
            icon: 'camera-outline',
            data: {
                action: 'share'
            }
        },
        {
            text: 'Choose Existing Photo',
            icon: 'image-outline',
            data: {
                action: 'share'
            }
        }
    ];

    constructor(private modal: ModalController) { }

    ngOnInit() {
    }

    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    updateProfile() {
        this.modal.dismiss(null, 'cancel');
    }

    updateAvatar() {
        console.log('change avatar clicked');
    }

}
