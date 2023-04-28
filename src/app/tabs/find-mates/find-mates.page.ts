import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { StatsPage } from 'src/app/pages/stats/stats.page';

@Component({
    selector: 'app-find-mates',
    templateUrl: './find-mates.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class FindMatesPage implements OnInit {

    constructor(private modal: ModalController) { }

    ngOnInit() { }

    async displayStats() {

        const modal = await this.modal.create({
            component: StatsPage,
            componentProps: {}
        })

        modal.onDidDismiss()
            .then((res) => {
                // the magic that happens when the modal is closed
            });

        return modal.present();
    }

}
