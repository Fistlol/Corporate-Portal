import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  getLinks(): Observable<any> {
    return this.http.get(`CorporateWebAPI/Hyperlink/GetHyperlinks`);
  }
}
