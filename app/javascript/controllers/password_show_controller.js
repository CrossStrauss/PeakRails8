import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="password-show"
export default class extends Controller {

  static targets = ["input", "toggle", "icon"]

  connect() {
    console.log("Password show controller connected");
    this.showing = false
  }

  toggle() {
    console.log("Toggle password visibility:", this.showing);
    this.showing = !this.showing
    this.inputTarget.type = this.showing ? "text" : "password"
    // this.toggleTarget.textContent = this.showing ? "Hide" : "Show"
    if (this.showing) {
      this.iconTarget.classList.replace('fa-eye-slash', 'fa-eye')
    } else {
      this.iconTarget.classList.replace('fa-eye', 'fa-eye-slash')
    }
  }
}
