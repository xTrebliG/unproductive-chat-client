import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }


  private apiUrl = 'http://localhost:3000/api';

  getMessages() : Observable<Message[]> {
    return this.http.get(`${this.apiUrl}/v1/get_messages`)
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  save(message: Message): Observable<Message>{
   return this.http.post(`${this.apiUrl}/v1/save_message`, {message}, {headers: this.getHeaders()})
   .map(res => res.json())
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private getHeaders(){
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    return headers;
  }

}

