import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-data-card',
  templateUrl: './transfer-data-card.component.html',
  styleUrls: ['./transfer-data-card.component.scss']
})
export class TransferDataCardComponent implements OnInit {

  @Input() transferData$ = new Observable()

  constructor() { }

  ngOnInit(): void {
  }

}
