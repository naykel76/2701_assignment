import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalConfirmationComponent } from './components/modal-confirmation.component';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ModalConfirmationComponent]
})
export class DevPage {

    @ViewChild(IonModal) modal: IonModal;

    message = 'Click the button to open the modal';
    name: string;


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
