import {Component, OnInit} from '@angular/core';
import {CarouselItem} from "../carousel/carousel.model";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../auth/user.model";
import {PostFormService} from "../post-form/post-form.service";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Object;
  itemsToDisplay: CarouselItem[] = [
    {
      content: 'lorempkoizejhijvzerklvlrjhgtyuknbvdfghjkljhgffghjkkjhgfdxcghjbklmkjhigyfrdseqsdftghjklmkjihugyftrdsedrfghjklpokijuytrezqsrdcftvgybhunji,kijnbuytreszsxdcfgvhnj,knburecftgvhjn,kjiubydtrexsxdcgfvhnjbvfdrxsedcgfvhjnvfcdxsdcgfvbhjnk hfdxgcv b,',
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
  constructor(private http: HttpClient, private postService: PostFormService) {
    this.data = []
  }

showData(){
    let data: Object;
    // @ts-ignore
  this.postService.getAllPosts().pipe(map(response => response = response['hydra:member'])).subscribe(posts => {
      data = posts;
      this.data = data
  })
}

  ngOnInit(): void {

  }

}
