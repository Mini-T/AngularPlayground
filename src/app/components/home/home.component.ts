import {Component, OnInit} from '@angular/core';
import {CarouselItem} from "../carousel/carousel.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    console.log(this.http.get('/api/posts').subscribe())
  }

  ngOnInit(): void {
  }

}
