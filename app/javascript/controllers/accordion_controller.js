import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="accordion"
export default class extends Controller {
  static targets = ['accordionButtonCarat', 'accordionBox'];

  accordionIsOpen = false;

  connect() {
    console.log("Accordion Controller Connected");
  }

  openAccordion(){
    this.accordionIsOpen = !this.accordionIsOpen;

    if(this.accordionIsOpen){
      console.log(this.accordionIsOpen);
      this.accordionBoxTarget.classList.add("accordionOpen")
    } else {
      console.log(this.accordionIsOpen);
      this.accordionBoxTarget.classList.remove("accordionOpen")
    }
  }
}
