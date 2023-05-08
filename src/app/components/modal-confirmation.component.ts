import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
    selector: 'nk-modal-confirmation',
    template: `
        <ion-modal trigger="open-modal" (willDismiss)="onWillDismiss($event)">
            <ng-template>
                <div class="light pxy-1 my-auto mx-1">
                    <h4>{{title}}</h4>
                    <p>this is the message!</p>
                    <div class="tar">
                        <ion-button (click)="cancel()" fill="outline">Cancel</ion-button>
                        <ion-button (click)="confirm()" [strong]="true">Confirm</ion-button>
                    </div>
                </div>
            </ng-template>
        </ion-modal>`,
    standalone: true,
    imports: [IonicModule]
})
export class ModalConfirmationComponent implements OnInit {

    @ViewChild(IonModal) modal: IonModal;
    @Input() title?: string;

    message = 'Click the button to open the modal';
    name: string;

    constructor() { }

    ngOnInit() { }

    /**
     * close the modal and do nothing
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    // pass in a action callback the fires before the modal is closed
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }

    onWillDismiss(event: Event) {
        const ev = event as CustomEvent<OverlayEventDetail<string>>;
        console.log(ev);
        if (ev.detail.role === 'confirm') {
            this.message = `The modal has been opened and dismissed!`;
            // this.message = `The modal has been dismissed. Hello, ${ev.detail.data}!`;
        }
    }
}
