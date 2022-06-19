import {Component, OnInit} from '@angular/core';
import {CarouselItem} from "../carousel/carousel.model";
import {HttpClient} from "@angular/common/http";
import {filter, Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data?: Object[]
  itemsToDisplay: CarouselItem[] = [
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/logo.svg',
      title: "Big titre"
    }

  ]
  constructor(private http: HttpClient) {
  }

  getAllPosts(){
    let data: Object[];
    // @ts-ignore
    this.http.get('/api/posts').subscribe((content: Array<Object>) => {
      data = content;
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
