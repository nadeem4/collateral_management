import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-content-header',
  templateUrl: './transfer-content-header.component.html',
  styleUrls: ['./transfer-content-header.component.scss']
})
export class TransferContentHeaderComponent implements OnInit {

  segements = ["CM", "FO", "CD", "CO", "SLB"]
  collaterals = ["Marginal Deposit", "Security Deposit"]
  instruments = ["Securities", "Cash", "FD", "BG", "GSce"]
  constructor() { }

  ngOnInit(): void {
  }

}
