import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/modules/request/services/request.service';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss']
})
export class LayoutMenuComponent implements OnInit {

  @Input() layoutMenus: { img: string, text: string, route: string}[] = [ ]

  constructor( private requestService: RequestService) { }

  ngOnInit(): void {
    console.log(this.layoutMenus)
  }

  changeLayout(i: number){
    this.requestService.changeLayout$.next({showChangeLayoutScree: true})
  }

}
