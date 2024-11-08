import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent {
  sections = [
  {
    name: "Swipe",
    img: null,
    color: "#FBE84A"
  },
  {
    name: "Walking",
    img: "../../../../../assets/img/walk.png",
    color: "#BF9AFD"
  },
  {
    name: "Meditation",
    img: "../../../../../assets/img/meditation.png",
    color: "#64CBF6"
  },
  {
    name: "Stop Overeating",
    img: "../../../../../assets/img/overeating.png",
    color: "#F68F64"
  },
  {
    name: "sleep On Time",
    img: "../../../../../assets/img/sleep.png",
    color: "#CBF664"
  }
  ];  // Just an example; could be dynamic
  currentIndex = 0;
  touchStartX = 0;
  touchEndX = 0;

  // Track the touch start position
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  // Track the touch end position and detect swipe direction
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;

    const swipeDistance = this.touchStartX - this.touchEndX;

    if (swipeDistance > 50) {
      this.next();  // Swipe left (next)
    } else if (swipeDistance < -50) {
      this.prev();  // Swipe right (previous)
    }
  }

  // Go to the next section
  next(): void {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    }
  }

  // Go to the previous section
  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

// bro i make a functionlity for my angular html based website i have a four div so i create a slider type not acutlly slider if user swipe right side then next div is displayed if left the display then previous screen display
