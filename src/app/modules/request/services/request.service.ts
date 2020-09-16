import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http'
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { RequestModel } from '../models/request.model'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl = '/assets/data/'

  constructor(private http: HttpClient) { }

  changeLayout$ = new ReplaySubject();

  updatedLayout$ = new Subject();

  closeUpdateLayoutScreen$  =  new Subject()

  resetLayout$ = new Subject()

  saveLayout$ = new Subject()

  getRequestData(): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(this.baseUrl + 'requestData.json')
  }
}
