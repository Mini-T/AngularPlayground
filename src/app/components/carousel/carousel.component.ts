import {Component, Input, OnInit} from '@angular/core';
import {CarouselItem} from "./carousel.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() itemsToDisplay!: CarouselItem[]

  constructor() { }

  ngOnInit(): void {
  }

}
