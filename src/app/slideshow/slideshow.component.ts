import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit{
  images = ['1.jpg', '2.jpg', '3.jpg'];
  headlines = ['My Chrismas-Tree', 'My favorit Chrismasball', 'Our Dinner'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.changeImage();
  }

  changeImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
