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

selectedBeer: any;      // selected beer before save

    /**
     * set the selected beer from select options
     */
    onSelectChange(event: any): void {
        this.selectedBeer = event.detail.value;
    }

<!-- didDismiss is included on the modal to handle escape key  -->
<ion-modal [isOpen]="showModal" (didDismiss)="cancel($event)">
    <ng-template>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button (click)="cancel($event)">Cancel</ion-button>
                </ion-buttons>
                <ion-title>BEER NAME</ion-title>
                <ion-buttons slot="end">
                    <ion-button (click)="save()" [strong]="true">Confirm</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <!-- modal content -->
        <ion-content>
            <ion-list>
                <div *ngIf="editing != undefined; then thenBlock else elseBlock"></div>
                <!-- display/edit selected item -->
                <ng-template #thenBlock>
                    <ion-title>
                        <h2>{{editing.name}}</h2>
                    </ion-title>
                    <ion-item>
                        <ion-checkbox [(ngModel)]="editing.is_favourite">Favourite</ion-checkbox>
                    </ion-item>
                    <ion-item class="ion-padding">
                        <ion-img src="assets/images/{{editing.image}}" alt="{{editing.name}}" class="mx-auto"></ion-img>
                    </ion-item>
                    <div>
                        <nk-header-create title="Venues" (runCreate)="create($event, 'venue')"></nk-header-create>
                        <ion-item-sliding *ngFor="let venue of editing.venues">
                            <ion-item>
                                <div class="flex space-between w-full">
                                    <div>{{venue.name}}</div>
                                    <div>${{venue.price}}</div>
                                </div>
                            </ion-item>
                            <ion-item-options>
                                <ion-item-option side="start" color="success">
                                    <ion-icon slot="icon-only" name="create-outline"></ion-icon>
                                </ion-item-option>
                                <ion-item-option color="danger">
                                    <ion-icon slot="icon-only" name="trash"></ion-icon>
                                </ion-item-option>
                            </ion-item-options>
                        </ion-item-sliding>
                    </div>
                </ng-template>

                <!-- create new item -->
                <ng-template #elseBlock>
                    <ion-item>
                        <ion-input>hhh</ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-select interface="action-sheet" label="Beer Name" label-placement="stacked" (ionChange)="onSelectChange($event)">
                            <ion-select-option *ngFor="let beer of beers;" [value]="beer">
                                <ion-item>{{beer.name}}</ion-item>
                            </ion-select-option>
                        </ion-select>
                    </ion-item>

                    <div *ngIf="selectedBeer != undefined; then thenBlock"></div>

                    <!-- display selected beer image and add venue component -->
                    <ng-template #thenBlock>
                        <ion-item class="ion-padding">
                            <ion-img src="assets/images/{{selectedBeer.image}}" alt="{{selectedBeer.name}}" class="mx-auto"></ion-img>
                        </ion-item>
                        <ion-list>
                            <h2>Venues</h2>
                        </ion-list>
                    </ng-template>
                </ng-template>

            </ion-list>
        </ion-content>
    </ng-template>
</ion-modal>
