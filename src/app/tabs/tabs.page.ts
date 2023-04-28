import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UserPage } from '../pages/user/user.page';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    standalone: true,
    imports: [IonicModule],
})
export class TabsPage {

    constructor(private modal: ModalController) { }

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

}
