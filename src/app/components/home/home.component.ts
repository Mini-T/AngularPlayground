import {Component, OnInit} from '@angular/core';
import {CarouselItem} from "../carousel/carousel.model";
import {HttpClient} from "@angular/common/http";
import {PostFormService} from "../post-form/post-form.service";
import {map} from "rxjs";
import {health, ServerStatusData} from "../server-status/server-status-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Object;
  serversData: ServerStatusData[] = [
    {
      name: 'Server1',
      health: health.RUNNING,
      info: {
        artifact: 'some text',
        name: 'name',
        time: '2022-03-02T15:31:42.167Z',
        version: '1.2.1',
        group: 'ch.admin.zas.transverse'
      }
    },
    {
      name: 'Server2',
      health: health.RUNNING,
      info: {
        artifact: 'some text',
        name: 'name',
        time: '2022-03-02T15:31:42.167Z',
        version: '1.2.1',
        group: 'ch.admin.zas.transverse'
      }
    },
    {
      name: 'Server3',
      health: health.WARNING,
      info: {
        artifact: 'some text',
        name: 'name',
        time: '2022-03-02T15:31:42.167Z',
        version: '1.2.1',
        group: 'ch.admin.zas.transverse'
      }
    },
    {
      name: 'Server4',
      health: health.DOWN,
      info: {
        artifact: 'some text',
        name: 'name',
        time: '2022-03-02T15:31:42.167Z',
        version: '1.2.1',
        group: 'ch.admin.zas.transverse'
      }
    }
  ]
  itemsToDisplay: CarouselItem[] = [
    {
      content: 'lorempkoizejhijvzerklvlrjhgtyuknbvdfghjkljhgffghjkkjhgfdxcghjbklmkjhigyfrdseqsdftghjklmkjihugyftrdsedrfghjklpokijuytrezqsrdcftvgybhunji,kijnbuytreszsxdcfgvhnj,knburecftgvhjn,kjiubydtrexsxdcgfvhnjbvfdrxsedcgfvhjnvfcdxsdcgfvbhjnk hfdxgcv b,',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Big titre"
    },
    {
      content: 'big message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "LAAAAAAAAAST"
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
