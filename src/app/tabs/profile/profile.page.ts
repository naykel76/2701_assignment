import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, IonPopover } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { USER } from 'src/data/user';
import { UserPage } from 'src/app/pages/user/user.page';
import { ProfileModalPage } from 'src/app/pages/profile-modal/profile.modal.page';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

    @ViewChild(IonPopover) popover: IonPopover;

    user = USER;

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

    ngOnInit(): void { }

    /**
     * display the edit profile modal
     */
    async editProfile() {

        const modal = await this.modal.create({

            component: ProfileModalPage,
            componentProps: { editing: true, user: this.user }
        })

        modal.onDidDismiss()
            .then((res) => {
                // the magic that happens when the modal is closed
            });

        return modal.present();
    }

    // updateAvatar() {
    //     console.log('change avatar clicked');
    // }

}
