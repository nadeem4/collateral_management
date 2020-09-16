import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/modules/request/services/request.service';

@Component({
  selector: 'app-change-layout-header',
  templateUrl: './change-layout-header.component.html',
  styleUrls: ['./change-layout-header.component.scss']
})
export class ChangeLayoutHeaderComponent implements OnInit {

  constructor( private requestService: RequestService) { }

  ngOnInit(): void {
  }

  close() {
    this.requestService.closeUpdateLayoutScreen$.next({close: true})
  }

  reset() {
    this.requestService.resetLayout$.next({reset: true})
  }

  save() {
    this.requestService.saveLayout$.next({save: true})
  }

}
