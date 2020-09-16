import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  selectedIndex = 5
  sideNavOptions: {img: string, txt: string, route: string, activeImage: string}[] =[]
  constructor( private activeRoute: ActivatedRoute) { 
    
    this.activeRoute.data.subscribe(console.log)

  }

  ngOnInit(): void {
    this.sideNavOptions = [
      {
        img: '/assets/images/dashboard-white.svg',
        activeImage: "/assets/images/dashboard-blue.svg",
        txt: 'Dashboard',
        route: '/dashboard'
      },
      {
        img: '/assets/images/margin-white.svg',
        activeImage: "/assets/images/margin-blue.svg",
        txt: 'Margin',
        route: '/margin'
      },
      {
        img: '/assets/images/collateral-white.svg',
        activeImage: "/assets/images/collateral-blue.svg",
        txt: 'Collateral',
        route: '/collateral'
      },
      {
        img: '/assets/images/request-white.svg',
        activeImage: "/assets/images/request-blue.svg",
        txt: 'Request',
        route: '/request'
      },
      {
        img: '/assets/images/addition-white.svg',
        activeImage: "/assets/images/addition-blue.svg",
        txt: 'Addition',
        route: '/addition'
      },
      {
        img: '/assets/images/margin-white.svg',
        activeImage: "/assets/images/transfer-blue.svg",
        txt: 'Transfer',
        route: '/transfer'
      },
      {
        img: '/assets/images/release-white.svg',
        activeImage: "/assets/images/release-blue.svg",
        txt: 'Releases',
        route: '/releases'
      },
      {
        img: '/assets/images/custom-setting-white.svg',
        activeImage: "/assets/images/dashboard-blue.svg",
        txt: 'Custom Setting',
        route: '/custom-setting'
      }
    ]
  }

  navigate(i:number) {
    this.selectedIndex = i
  }

}
