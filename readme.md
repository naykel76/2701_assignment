## Bug Tracking

modal does not reset on escape

async showModal() {
    const modal = await this.modalController.create({
    component: ModalComponent,
    backdropDismiss: false,
});
return await modal.present();
}
