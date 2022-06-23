import {Component, HostListener, Input, OnInit} from '@angular/core';
import {CarouselItem} from './carousel.model';

@Component({
             selector: 'app-carousel',
             templateUrl: './carousel.component.html',
             styleUrls: ['./carousel.component.scss']
           })

//composant fait pour le sport, simple carousel fait main, peut être amélioré sur beaucoup d'aspects
export class CarouselComponent implements OnInit {

  scrollValue: number;
  baseScrollValue: number;
  innerWidth: number;
  maxScrollValue!: number;
  cardWidth!: number;
  @Input() itemsToDisplay: CarouselItem[];

  bgImage(ix: number) {
    return {'background-image': 'url(\'https://picsum.photos/200/300?random=' + ix + '\')'};
  };

  constructor() {
    this.itemsToDisplay = [];
    this.baseScrollValue = 0;
    this.scrollValue = this.baseScrollValue;
    this.innerWidth = window.innerWidth;
    this.cardWidth = 320;
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 700) {
      this.cardWidth = 250;
    } else {
      this.cardWidth = 350;
    }
  }

  ngOnInit(): void {
    this.maxScrollValue = this.getMaxScrollValue();
  };

  getMaxScrollValue(): number {
    let totalWidth = ((this.itemsToDisplay.length - 1) * this.cardWidth) * -1;
    console.log(totalWidth);

    return totalWidth;
  }

  scrollCarousel(side: 'right' | 'left') {
    if (side === 'left') {
      if (this.scrollValue >= this.baseScrollValue) {
        this.scrollValue = this.maxScrollValue;
      } else {
        this.scrollValue + this.cardWidth >= this.baseScrollValue ? this.scrollValue = this.baseScrollValue : this.scrollValue += this.cardWidth;
        console.log(this.scrollValue);
      }

    }
    if (side === 'right') {
      if (this.scrollValue <= this.maxScrollValue) {
        this.scrollValue = this.baseScrollValue;
      } else {
        this.scrollValue - this.cardWidth <= this.maxScrollValue ? this.scrollValue = this.maxScrollValue : this.scrollValue -= this.cardWidth;
        console.log(this.scrollValue);
      }
    }
  }
}
