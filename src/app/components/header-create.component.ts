import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'nk-header-create',
    template: `
          <ion-header>
            <ion-toolbar color="primary">
                <ion-title>{{title}}</ion-title>
                <ion-buttons slot="end">
                    <ion-button id="open-modal" expand="block" (click)="create()">
                        <ion-icon name="add-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
    `,
    standalone: true,
    imports: [IonicModule]
})
export class HeaderCreateComponent {

    @Input() title?: String;
    @Output() runCreate = new EventEmitter<any>;

    constructor() { }

    /**
     * event to fire the parent create method
     */
    create() {
        this.runCreate.emit()
    }

}
