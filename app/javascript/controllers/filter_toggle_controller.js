import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter-toggle"
export default class extends Controller {
  static targets = ['filterButton', 'filterBox']

  filterShown = false;

  connect() {
    console.log("Filter Toggle Connected");
  }


  toggleFilter(params) {
      this.filterShown = !this.filterShown


      if(this.filterShown){

        console.log(this.filterShown)
        this.filterBoxTarget.classList.add('filter-show');
        this.filterBoxTarget.classList.remove('filter-hidden');

        this.filterButtonTarget.classList.add('active');

      } else {

        console.log(this.filterShown)
        this.filterBoxTarget.classList.remove('filter-show');
        this.filterBoxTarget.classList.add('filter-hidden');

        this.filterButtonTarget.classList.remove('active');
        
      }

  }
}
