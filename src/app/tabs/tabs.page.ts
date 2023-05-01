import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UserPage } from '../pages/user/user.page';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class TabsPage {

    showTabs: Boolean;

    constructor(private modal: ModalController, private router: Router) { }

    /**
     *  NK::TD THIS WAS USED FOR THE ORIGINAL PROFILE MODAL AN MAY BE OBSOLETE
     */
    async editProfile() {

        const modal = await this.modal.create({
            component: UserPage,
            componentProps: { editing: true }
        })

        modal.onDidDismiss()
            .then((res) => {
                // the magic that happens when the modal is closed
            });

        return modal.present();
    }

    /**
     * hide the toolbar on the home page
     */
    showHideToolbar() {
        if (this.router.url === '/tabs/home') {
            this.showTabs = false;
        } else {
            this.showTabs = true;
        }
    }
}
