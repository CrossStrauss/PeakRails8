import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="parrallax"
export default class extends Controller {
  connect() {
    console.log("Parallax controller connected");

    // Wait until GSAP and ScrollTrigger are loaded
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        this.initParallax();
      } else {
        setTimeout(waitForGSAP, 50);
      }
    };

    waitForGSAP();
  }

  initParallax() {
    const images = this.element.querySelectorAll(".parallax-image");

    if (images.length === 0) return;

    // gsap.set(images, { minHeight: "100vh" });

    images.forEach(img => {
      ScrollTrigger.create({
        trigger: img,
        start: "top bottom", // when top of image enters viewport
        end: "bottom top",   // when bottom leaves viewport
        scrub: false,         // smooth parallax
        invalidateOnRefresh: true,
        onUpdate: self => {
          gsap.to(img, { y: 100 * 2 * self.progress });
        }
      });
    });

    window.addEventListener("load", () => ScrollTrigger.refresh());
  }
}
