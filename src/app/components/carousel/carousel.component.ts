import {Component, Input, OnInit} from '@angular/core';
import {CarouselItem} from "./carousel.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  scrollValue: number;
  baseScrollValue:number;
  maxScrollValue!:number;
  @Input() itemsToDisplay: CarouselItem[]

  constructor() {
    this.itemsToDisplay = []
    this.baseScrollValue = 0
    this.scrollValue = this.baseScrollValue

  }

  ngOnInit(): void {
    this.maxScrollValue = this.getMaxScrollValue()
  }

  getMaxScrollValue(): number {
    let totalWidth = ((this.itemsToDisplay.length - 1) * 370) * -1
    console.log(totalWidth)
    return totalWidth
  }
  scrollCarousel(side: 'right' | 'left'){
      if (side === 'left'){
        if (this.scrollValue === this.baseScrollValue){
          this.scrollValue = this.maxScrollValue
        } else {
          this.scrollValue + 370 >= this.baseScrollValue ? this.scrollValue = this.baseScrollValue : this.scrollValue += 370
          console.log(this.scrollValue)
        }

      }
      if (side === 'right'){
        if (this.scrollValue === this.maxScrollValue){
          this.scrollValue = this.baseScrollValue
        } else {
          this.scrollValue - 370 <= this.maxScrollValue ? this.scrollValue = this.maxScrollValue : this.scrollValue -= 370
          console.log(this.scrollValue)
        }


      }
    }
}
