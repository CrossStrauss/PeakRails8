import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  
  static targets = ["modal", "panel"]

  modalOpen = false;

  connect() {
    console.log("Modal controller connected");
    this.modalTarget.addEventListener("openCustomModal", this.triggerCustomModal);
  }

  disconnect() {
    this.modalTarget.removeEventListener("openCustomModal", this.triggerCustomModal);
  }

  openCustomModal() {
    this.modalOpen = true;
    console.log("Open modal method called");
    this.modalTarget.classList.add("show");
    this.panelTarget.classList.add("show");
  }

  closeCustomModal() {
    this.modalOpen = false;
    this.modalTarget.classList.remove("show");
    this.panelTarget.classList.remove("show");
  }

  triggerCustomModal = () => {
    if (this.modalOpen) {
      this.openCustomModal();
    }
  }
  
}
