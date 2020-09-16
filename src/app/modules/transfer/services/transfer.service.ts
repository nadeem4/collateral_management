import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TransferModel } from '../models/transfer.model'

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  baseUrl = '/assets/data/'

  constructor( private http: HttpClient) { }

  getTransferData(): Observable<TransferModel[]> {
    return this.http.get<TransferModel[]>(this.baseUrl + 'transferData.json')
  }
}
