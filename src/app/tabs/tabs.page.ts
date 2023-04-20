import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UserPage } from './user/user.page';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    standalone: true,
    imports: [IonicModule],
})
export class TabsPage {
    public environmentInjector = inject(EnvironmentInjector);

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

    // async editContact(i: number, slider: IonList) {
    //     console.log(i)

    //     const modal = await this.modal.create({
    //         component: UserPage,
    //         componentProps: { id: i, contact: this.contacts[i], editing: true }
    //     })

    //     modal.onDidDismiss()
    //         .then((res) => {
    //             if (res.role == 'cancel') {
    //                 console.log('do nothing');
    //             } else {
    //                 this.contacts[i] = res.data;
    //             }
    //         }).finally(() => {
    //             slider.closeSlidingItems();
    //         });

    //     return modal.present();
    // }



    // delete(i: number) {
    //     if (confirm('Delete ' + this.contacts[i].firstName)) {
    //         this.contacts.splice(i, 1);
    //     }
    // }
}
