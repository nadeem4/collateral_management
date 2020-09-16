import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DownloadService } from '../../../../shared/services/download.service'

@Component({
  selector: 'app-request-data-card-header',
  templateUrl: './request-data-card-header.component.html',
  styleUrls: ['./request-data-card-header.component.scss'],
})
export class RequestDataCardHeaderComponent implements OnInit {
  
  constructor( private downnloadService: DownloadService) {}

  layoutMenus: { img: string, text: string, route: string}[] = [
    {
      img: '/assets/images/sel-hide-cols.svg',
      route: '',
      text: 'Select & Hide Columns'
    },
    {
      img: '/assets/images/show-hidden.svg',
      route: '',
      text: 'Show Hidden Columns'
    },
    {
      img: '/assets/images/reorder.svg',
      route: '',
      text: 'Reorder Columns'
    }
  ]

  ngOnInit(): void {}

  

  export(selected: boolean) {
    this.downnloadService.download.next({export: true, selected: selected})
  }
}

