import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/modules/request/services/request.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-change-layout',
  templateUrl: './change-layout.component.html',
  styleUrls: ['./change-layout.component.scss']
})
export class ChangeLayoutComponent implements OnInit {

  @Input() cols = []

  currentCols = []

  hiddenCols = []

  constructor( private requestService: RequestService) { }

  ngOnInit(): void {
    console.log(this.cols)
    this.subscribeToSaveLayout()
    this.currentCols = [ ...this.cols]
    this.subscribeToResetEvent()
  }

  hideCol(i: number) {
    console.log(i)
    this.hiddenCols.push( this.cols[i])
    this.cols = this.cols.filter( (col, colIdx) => colIdx != i  )

    console.log({hiddenCols: this.hiddenCols, cols: this.cols})
   
  }

  subscribeToSaveLayout() {
    this.requestService.saveLayout$.subscribe( res => {
      this.requestService.updatedLayout$.next({cols: this.cols})
    })
  }

  subscribeToResetEvent() {
    this.requestService.resetLayout$.subscribe(res => {
      this.hiddenCols = []
      this.cols = this.currentCols
      console.log(this.cols)
      this.currentCols = [...this.cols]
    } )
  }

  drop(event: CdkDragDrop<[]>) {
    moveItemInArray(this.cols, event.previousIndex, event.currentIndex);
    console.log(this.cols)
  }

}
