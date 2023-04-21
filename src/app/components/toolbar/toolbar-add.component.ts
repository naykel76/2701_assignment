import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'nk-toolbar-add',
    template: `
        <ion-toolbar color="primary">
            <ion-title>{{title}}</ion-title>
            <ion-buttons slot="end">
                <ion-button (click)="add()">
                    <ion-icon name="add-outline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    `,
    standalone: true,
    imports: [IonicModule]
})
export class ToolbarAddComponent {

    @Input() title?: String;
    @Output() runAdd = new EventEmitter<any>;

    constructor() { }

    /**
     * emit the event to fire the parent add method
     */
    add() {
        this.runAdd.emit()
    }

}
