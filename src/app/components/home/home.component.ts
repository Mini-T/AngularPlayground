import {Component, OnInit} from '@angular/core';
import {CarouselItem} from '../carousel/carousel.model';
import {HttpClient} from '@angular/common/http';
import {PostFormService} from '../post-form/post-form.service';
import {map} from 'rxjs';
import {health, ServerStatusData} from '../server-status/server-status-data';

@Component({
             selector: 'app-home',
             templateUrl: './home.component.html',
             styleUrls: ['./home.component.scss']
           })
export class HomeComponent implements OnInit {

  data: Object;
  serversData: ServerStatusData[] = [
    {
      name: 'Database',
      health: health.RUNNING,
      info: {
        artifact: 'PostgreSql',
        name: 'PostgreSql',
        time: '2022-03-02T15:31:42.167Z',
        version: '1.2.1',
        group: 'ch.admin.zas.transverse'
      }
    },
    {
      name: 'Backend',
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
      name: 'Identification provider',
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
      name: 'Translation provider',
      health: health.DOWN,
      info: {
        artifact: 'some text',
        name: 'name',
        time: '2022-03-02T15:31:42.167Z',
        version: '1.2.1',
        group: 'ch.admin.zas.transverse'
      }
    }
  ];
  itemsToDisplay: CarouselItem[] = [
    {
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Titre"
    },
    {
      content: 'un autre message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Titre d'un autre message"
    },
    {
      content: 'encore un autre message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Titre d'un autre message"
    },
    {
      content: 'un petit message',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Titre du petit message"
    },
    {
      content: 'un message différent',
      image: '../../assets/images/BORDERLESS.svg',
      title: "Titre du message différent"
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
    this.data = [];
  }

  showData() {
    let data: Object;
    // @ts-ignore
    this.postService.getAllPosts().pipe(map(response => response = response[ 'hydra:member' ])).subscribe(posts => {
      data = posts;
      this.data = data;
    });
  }

  ngOnInit(): void {

  }

}
