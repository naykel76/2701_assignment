GreenBank RSL
54 Anzac Ave, Hillcrest QLD 4118

Runcorn Tavern
124 Gowan Rd, Sunnybank Hills QLD 4109

Souths Sports Club
174 Mortimer Rd, Acacia Ridge QLD 4110

Rocklea Hotel
1337 Ipswich Rd, Rocklea QLD 4106


Will we need to implement user authentication including forgotten passwords?


- [x] Display beer list (primary landing page)
    - [ ] Display each item with the lowest venue price
- [ ] Display beer detail (click)
    - [ ] Lock the ‘select beer’ option when displaying a beer from the my-beers list. Beers can only be added or deleted, from the list they cannot be changed after the initial save.
- [ ] Add beer (button)
- [ ] Edit beer (swipe)
- [ ] Delete beer (swipe)
- [ ] Validate and confirmation actions


To prevent accidental changes,
The "select beer" option should be locked when displaying a beer from the "my-beers" list. Once a beer is added to the list and saved, it can only be deleted or, but not modified.

     <!-- <ion-select interface="action-sheet" label="Beers Name" label-placement="stacked"
                (ionChange)="handleEditing($event)"> -->
<!-- inline modal -->
<ion-modal [isOpen]="showModal">
    <ng-template>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button (click)="cancel(false)">Cancel</ion-button>
                </ion-buttons>
                <ion-title>BEER NAME</ion-title>
                <ion-buttons slot="end">
                    <ion-button (click)="confirm()" [strong]="true">Confirm</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <!-- modal content -->
        <ion-content>
            <ion-list>
                <!-- <ion-item>
                    <ion-select interface="action-sheet" label="Beers Name" label-placement="stacked"
                        (ionChange)="handleEditing($event)">
                        <ion-select-option *ngFor="let beer of beers;" [value]="beer">
                            <ion-item>{{beer.name}}</ion-item>
                        </ion-select-option>
                    </ion-select>
                </ion-item> -->
                <!-- <ion-item class="ion-padding">
                    <ion-img src="assets/images/{{editing.image}}" alt="{{editing.name}}" class="mx-auto"></ion-img>
                </ion-item> -->
            </ion-list>
        </ion-content>
    </ng-template>
</ion-modal>
