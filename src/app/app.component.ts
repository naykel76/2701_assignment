import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class AppComponent {

    settings = {
        showSplash: true,
        authenticated: false,
        remember: false,
        checkedIn: '' // venue
    }

    authenticated: Boolean

    constructor(private storageService: StorageService) { }

    async ngOnInit() { }

}


